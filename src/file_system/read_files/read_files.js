function main(req, res) {
    let data = req.body;
    console.log(data);
    let folder_name=req.query.folder_name;
    let file_name=req.query.file_name;
    let number_of_files=req.query.number_of_files;

    const fs = require('fs');
    // fs.readdir(folder_name,(err,data)=>{
    //     res.send(data);
    // })
    const fileName=fs.readdirSync(folder_name);
    console.log(fileName);
    res.send(fileName);
}
module.exports = {
    main: main
};