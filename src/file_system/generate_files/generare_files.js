function main(req, res) {
    let data = req.body;
    console.log(data);
    let folder_name=req.query.folder_name;
    let file_name=req.query.file_name;
    let number_of_files=req.query.number_of_files;

    const fs = require('fs');
    fs.mkdir(folder_name, { recursive: true }, (err) => {
        if (err) {
            // res.send(err);
        } else {
            for(let i=0;i<number_of_files;i++){
                data["index"]=i;
                fs.writeFile(folder_name+"/"+file_name+`${i}`,JSON.stringify(data),(err)=>{
                    // console.log("The File has been saved.");
                    if(err){
                
                        // res.send(err);
                    }
                    else{
                        // res.send("Done");
                    }

                    
                });
            }
            res.send("FIle created");
        }
    });
    
}
module.exports = {
    main: main
};