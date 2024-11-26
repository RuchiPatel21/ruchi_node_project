
const fs= require("fs");
const main= (req,res)=>{
    const file_name = req.query.file_name;
    const data = fs.readFileSync(file_name,{ encoding: 'utf8', flag: 'r' });
   
    console.log("data",data);
    res.send(data);
    
}

module.exports={
    main:main
}
