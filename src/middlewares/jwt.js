

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

export default verifyJwt;