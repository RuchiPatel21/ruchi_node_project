module.exports = function (app) {
    app.get('/login_api', (req, res) => {
        let x = require("../src/login_api/login_api");
        console.log("X", x)
        x.main(req, res);
    })
    
}