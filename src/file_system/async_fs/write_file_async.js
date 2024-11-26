function main(req,res){

    const fs = require('fs');
    
    
    let data = req.body;
    console.log(data);
    let file_name=req.query.file_name
    
    fs.writeFile(file_name,JSON.stringify(data),(err)=>{
        // console.log("The File has been saved.");
        if(err){
    
            res.send(err);
        }
        else{
    
            res.send("Done");
        }
        
    });
}

module.exports={
    main:main
}