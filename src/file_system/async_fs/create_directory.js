function main(req, res) {
    const fs = require('fs');
    
    // let dirName = req.body.dirName;
    
    fs.mkdir('new_file', { recursive: true }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Directory created successfully");
        }
    });
}

module.exports = {
    main: main
};
