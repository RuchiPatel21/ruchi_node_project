function main(req,res){
  const fs = require('fs');
  let file_name=req.query.file_name


  fs.readFile(file_name,'utf-8',(err,data)=>{
    if(err){
  
}
    else{
      console.log(data)
      res.send(data)
    }
  })
}

module.exports={
  main:main
}