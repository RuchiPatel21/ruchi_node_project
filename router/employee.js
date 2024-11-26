module.exports=function(app){
    app.get('./employee', function (req, res) {
    let x=require("../src/employee/get_employee")
    console.log("X",x)
     x.main(req,res);
})
}