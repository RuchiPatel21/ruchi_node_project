module.exports=function(app){
    
    require('./employee') (app);
    require('./file_system') (app);
    require(__dirname+"/mongo_db")(app);
    require(__dirname+"/api_internal_communication")(app);
    require("./gmail")(app);
    require("./emit_event")(app);
    require("./joi_validator")(app);
    require("./stream")(app);
    require("./uuid")(app);
    require("./json_web_token")(app);
    require("./login_api")(app);
    
    

    // require('./write_file_system') (app);
}