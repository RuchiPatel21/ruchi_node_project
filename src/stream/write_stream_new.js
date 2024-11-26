function main(req,res){
    const fs = require("fs");
    
    console.log("Ruchi")
    const rs = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
    const ws = fs.createWriteStream(__dirname+"/../dummy_write_file_new_test.txt");
    rs.pipe(ws);
    // let i=0;
    // rs.on("data",(chunks)=>{
    // i++;
    // ws.write(chunks);
    // // console.log(`chunks length`,chunks.length);
    // // console.log(`chunks ${i}`,chunks.toString());
    // })
    // rs.on("end",(chunks)=>{
    // // console.log("chunks",chunks);
    // console.log("done");
    
    // // res.send("Ruchi");
    // })

    
    }
    module.exports={
        main
    }