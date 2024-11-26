module.exports = function (app) {
    app.get('/json_web_token', (req, res) => {
        let x = require("./../src/jsonwebtoken/json_web_token");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/json_web_token/verify', (req, res) => {
        let x = require("./../src/jsonwebtoken/verify_jwt_token");
        console.log("X", x)
        x.main(req, res);
    })
}