module.exports=function(app){
app.get("/api/stream/read",function(req,res){
    
    console.log("test")

    const x= require("../src/stream/read_stream");
    x.main(req,res);
})
app.post("/api/stream/write",function(req,res){
    
    console.log("test")

    const x= require("../src/stream/write_stream");
    x.main(req,res);
})

app.get("/api/stream/write_stream_new",function(req,res){
    
    console.log("test")

    const x= require("../src/stream/write_stream_new");
    x.main(req,res);
})
}
