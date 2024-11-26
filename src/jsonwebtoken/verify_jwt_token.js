const { JWT_SECRET } = require("../../env_config");

const main=(req,res)=>{
    const {token} = req.body;
   try {
    const jwt=require("jsonwebtoken");
    const verify=jwt.verify(token,JWT_SECRET);
    console.log("Ruchi",verify);
    res.send(verify);

   } catch (error) {
    console.log("Ruchi",error);
    
    res.send(error);
   }
    
}
module.exports={
    main:main
}