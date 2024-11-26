function main(req, res) {
    const fs = require('fs');
    
    // let path = req.body.path;
    
    fs.access('ruhi.txt', fs.constants.F_OK, (err) => {
        if (err) {
            res.send("File or directory does not exist");
        } else {
            res.send("File or directory exists");
        }
    });
}

module.exports = {
    main: main
};
