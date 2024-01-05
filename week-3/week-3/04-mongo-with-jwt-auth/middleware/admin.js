const {Admin} = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = 'AdminPassword';

function verifyToken(token){
    try{
        jwt.verify(token,jwtPassword);
    }
    catch{
        return false;
    }
    return true;
}

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const authtoken = req.headers.authorization;
    Admin.findOne({token:authtoken}).then((admin) => {
        if (!admin) {
          return res.status(404).send({
            message: 'No Admin Found with this token, try adding a new Admin user',
          })
        }
        const isVerified = verifyToken(authToken.split(' ')[1].trim())
        if (isVerified) {
            next()
        } else {
            res.status(403).send({ message: 'Invalid token' })
        }
        })
        .catch((error) => {
        res.status(500).send({
            message: 'Cannot Authenticate the USER',
        })
    })
}

module.exports = adminMiddleware;