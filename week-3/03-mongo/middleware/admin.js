const {Admin} = require("../db/index")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const adminExist = await Admin.findOne({username:username});
    if(adminExist){
        next();
    }
    else{
        res.status(404).json({
            msg:"This username doesn't exist!"
        });
    }
}

module.exports = adminMiddleware;