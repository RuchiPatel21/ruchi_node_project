const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../../env_config");
const  get_jwt_token=(data)=>{
    var token = jwt.sign(data, JWT_SECRET);
    console.log("Ruchi",token);
    return token;
}
const  verif_jwt_token=(token)=>{
    try {
        const verify=jwt.verify(token,JWT_SECRET);
        console.log("Ruchi",verify);
        return verify;
       } catch (error) {
        console.log("Ruchi",error);
        res.send(error);
       }
}
module.exports={
    get_jwt_token,verif_jwt_token
}