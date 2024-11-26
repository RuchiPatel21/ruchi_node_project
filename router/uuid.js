module.exports = function (app) {
    app.get('/uuid', (req, res) => {
        let x = require("./../src/utitlities/uuid");
        console.log("X", x)
        x.main(req, res);
    })
}