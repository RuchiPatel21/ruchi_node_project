module.exports=function(app){
    app.get('/api/api_internal_communication/call_other_api', (req, res)=> {
        let z=require('../src/api_internal_communication/call_other_api');
        z.main(req,res);
    // res.send("Hello")
});
}