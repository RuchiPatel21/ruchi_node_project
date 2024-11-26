function main(req, res){
    var Client = require('node-rest-client').Client;
    var client = new Client();
    let data_res={};
    let count=2;
    client.get("http://localhost:9998/api/v1/mongo_db/read_api", function (data, response) {
        // parsed response body as js object
        console.log("dataTest",data);
        data_res.mongo=data;
        // res.send(data)
        // raw response
        // console.log(response);
        count--;
        if(count==0){
            res.send(data_res)
        }
    });
    client.get("http://localhost:9998/api/v1/file_system/sync_fs/read_file_sync", function (data, response) {
        // parsed response body as js object
        console.log("dataTest",data);
        data_res.file=data;
        // res.send(data)
        // raw response
        // console.log(response);
        count--;
        if(count==0){
            res.send(data_res)
        }
    });
    // res.send('Ruchi');
    // console.log("Hello");
}

module.exports={
    main : main
}