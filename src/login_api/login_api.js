const { get_jwt_token } = require("../utitlities/jwt");

function main(req, res) {
// const jwt= get_jwt_token(req.body);
const jwt= get_jwt_token(JSON.stringify(req.body));
console.log(jwt);
res.send({data:{token:jwt}})
}

module.exports = {
    main: main
};
