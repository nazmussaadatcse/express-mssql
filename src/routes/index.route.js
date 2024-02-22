import { Router } from "express";
import jwt from 'jsonwebtoken';
import personController from "../controllers/person.controller.js";
import verifyJwt from "../middlewares/jwt.js";
import lunchController from "../controllers/lunch.controller.js";
const apiRouter = Router();

const secretKey = process.env.SECRET_KEY;


apiRouter.get('/person', personController.getAllPersons)
apiRouter.post('/person', personController.postOnePerson)
apiRouter.patch('/person/:id', personController.pendingPerson)
apiRouter.patch('/personToAdmin/:id', personController.personToAdmin)
apiRouter.delete('/person/:id', personController.deleteOnePerson)

apiRouter.post('/lunch', lunchController.postSingleLunch)
apiRouter.patch('/lunch/:id', lunchController.updateSingleLunch)




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
        else {
            res.json({
                message: 'profile accessed',
                authData
            })
        }
    })

})

apiRouter.get('/', (req, res) => {
    res.send('FIS MSSQL Express server online!');
});


export default apiRouter;