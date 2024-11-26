const { JWT_SECRET } = require("../../env_config");

const main=(req,res)=>{
    const jwt=require("jsonwebtoken");
    var token = jwt.sign({ user: 'Ruchi' }, JWT_SECRET);
    
    console.log("Ruchi",token);
    res.send(token);
    
}
module.exports={
    main:main
}