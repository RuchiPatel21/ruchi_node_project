const { verif_jwt_token } = require("../utitlities/jwt");

// db.employees.updateOne({ _id: 1 }, { $set: { salary: 9000 } })
const main =async(req,res)=>{
    console.log("req.headers.Access_Token Test new",req.headers.access_token)
    // console.log("req.headers",req.header)
    const verify = verif_jwt_token(req.headers.access_token)
    console.log("verify token",verify)

    // res.send("Ruchi")
    console.log("verify",verify)
    if(!verify){
        res.send("Access denied");
        return
    }else{
        const {mongodbConnector} = require("../pg_database/mongo_db_connector")
        const data = req.body;
        const db =await mongodbConnector();
        const response = await db.collection('collection1').find(data).toArray();
        console.log(response);
        res.json({
            res:`Updated`,
            response
        });
    }
   
}

module.exports={
    main
}