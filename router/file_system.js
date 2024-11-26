module.exports=function(app){


    app.get('/api/file_system/v1/read_file_sync/', (req, res)=> {
        let z=require('../src/file_system/async_fs/read_file_async');
        z.main(req,res);
    // res.send("Hello")
});

app.post('/api/file_system/v1/write_file_sync/', function (req,res){
    let y=require('../src/file_system/async_fs/write_file_async');

    y.main(req,res);
});

app.put('/api/file_system/v1/append_file/', function(req, res) {
    let z=require('../src/file_system/async_fs/append_file');
    z.main(req, res);

});

app.post('/api/file_system/v1/rename_file/', function(req,res){
    let r = require('../src/file_system/async_fs/rename_file');
    r.main(req,res);
})


app.post('/api/file_system/v1/create_directory/', function(req,res){
    let c = require('../src/file_system/async_fs/create_directory');
    c.main(req,res);
})

app.post('/api/file_system/v1/check_if_exists/', function(req,res){
    let e = require('../src/file_system/async_fs/check_if_exists');
    e.main(req,res);
})

app.post('/api/file_system/v1/delete_file/', function(req,res){
    let  = require('../src/file_system/async_fs/delete_file');
    e.main(req,res);
})


 // =================================== Sync ================================================
 app.post("/api/v1/file_system/sync_fs/write_fille_sync",(req,res)=>{
    const wite_file_instance = require(__dirname+"/../src/file_system/sync_fs/write_fille_sync");
    wite_file_instance.main(req,res);
})
app.get("/api/v1/file_system/sync_fs/read_file_sync",(req,res)=>{
    const read_file_instance = require(__dirname+"/../src/file_system/sync_fs/read_file_sync");
    read_file_instance.main(req,res);
})
app.get("/api/v1/file_system/sync_fs/append_file_sync",(req,res)=>{
    const append_file_instance = require(__dirname+"/../src/file_system/sync_fs/append_file_sync");
    append_file_instance.main(req,res);
})
app.get("/api/v1/file_system/sync_fs/rename_file_sync",(req,res)=>{
    const rename_file_instance = require(__dirname+"/../src/file_system/sync_fs/rename_file_sync");
    rename_file_instance.main(req,res);
})
app.get("/api/v1/file_system/sync_fs/make_directory_sync",(req,res)=>{
    const make_directory_instance = require(__dirname+"/../src/file_system/sync_fs/make_directory_sync");
    make_directory_instance.main(req,res);
})
app.get("/api/v1/file_system/sync_fs/file_exist_sync",(req,res)=>{
    const file_exist_instance = require(__dirname+"/../src/file_system/sync_fs/file_exist_sync");
    // const file_exist_instance = require(__dirname.concat("../src/file_system/sync_fs/file_exist_sync"));
    file_exist_instance.main(req,res);
})

app.get("/api/v1/file_system/generate_files/generate_files",(req,res)=>{
    const generate_files_instance = require("../src/file_system/generate_files/generare_files");
    // const file_exist_instance = require(__dirname.concat("../src/file_system/sync_fs/file_exist_sync"));
    generate_files_instance.main(req,res);
})

app.get("/api/v1/file_system/read_files/read_files",(req,res)=>{
    const read_files_instance = require(__dirname+"/../src/file_system/read_files/read_files");
    // const file_exist_instance = require(__dirname.concat("../src/file_system/sync_fs/file_exist_sync"));
    read_files_instance.main(req,res);
})
app.get("/api/v1/file_system/copy_paste",(req,res)=>{
    const read_files_instance = require("../src/file_system/sync_fs/copy_paste");
    // const file_exist_instance = require(__dirname.concat("../src/file_system/sync_fs/file_exist_sync"));
    read_files_instance.main(req,res);
})

}