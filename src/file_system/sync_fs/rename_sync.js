
const fs = require("fs");
const main=function(req,res){
    const new_name=req.query.new_name;
    const old_name=req.query.old_name;
   
    let rename_sync=fs.renameSync(old_name,new_name);
    console.log("Renamed sucessfully",rename_sync);
    res.send("Renamed sucessfully");
}

module.exports={
    main:main
}
