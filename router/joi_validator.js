module.exports = function (app) {
    app.get('/joi_validator/joi_validator/', (req, res) => {
        let x = require("./../src/joi_validator/joi_validator");
        console.log("X", x)
        x.main(req, res);
    })
}