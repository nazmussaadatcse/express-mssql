import { Router } from "express";
import jwt from 'jsonwebtoken';
import personController from "../controllers/person.controller.js";
const apiRouter = Router();

const secretKey = process.env.SECRET_KEY;


apiRouter.get('/person', personController.getAllPersons)



apiRouter.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'saadat',
        email: 'saadat@gmail.com'
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (error, token) => {
        res.json({
            token
        })
    })
})

apiRouter.post('/profile', verifyJwt, (req, res) => {

    jwt.verify(req.token, secretKey, (error, authData) => {
        if (error) {
            res.send({
                result: 'Invalid token'
            })
        }
        else{
            res.json({
                message: 'profile accessed',
                authData
            })
        }
    })



})

function verifyJwt(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    }
    else {
        res.send({
            result: 'Token is not valid.'
        })
    }
}

export default apiRouter;