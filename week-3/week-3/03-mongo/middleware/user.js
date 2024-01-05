const {User} = require("../db/index");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const userExist = await User.findOne({username:username});
    if(userExist){
        next();
    }
    else{
        res.status(404).json({
            msg:"This username doesn't exist!"
        });
    }
}
module.exports = userMiddleware;