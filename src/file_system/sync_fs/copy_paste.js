
const fs= require("fs");
const main= (req,res)=>{
    // require("../../dummy_txt_file.txt")
    const file_name = __dirname+"./../../dummy_txt_file.txt";
    console.log("file_name",file_name)
    const data = fs.readFileSync(file_name,{ encoding: 'utf-8', flag: 'r' });
    // console.log("Data",data)
    let write_sync=fs.writeFileSync("100mb_file_fs.txt",data);
    res.send(data);
    
}

module.exports={
    main:main
}
