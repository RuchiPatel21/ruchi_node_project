
const fs = require("fs");
const main = function(req,res){
    let directory_name =req.query.directory_name;
   
    const directory = fs.mkdirSync(directory_name,{recursive:true})
    console.log("Sync Directory Created sucessfully",directory);
    res.send("Sync Directory Created sucessfully");
}

module.exports={
    main:main
}
