const fs =require("fs");
const main=(req,res)=>{
    const file_name = req.query.file_name;
    const data = req.body;
    console.log(data,"data");
    let write_sync=fs.writeFileSync(file_name,JSON.stringify(data));
    
    res.send("Done");
    
}
module.exports={
    main:main
}