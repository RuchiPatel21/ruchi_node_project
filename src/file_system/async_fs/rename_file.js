function main(req, res) {
    const fs = require('fs');
    
    // let oldPath = require('../file_system/dummy');
    // let newPath = require('../file_system/renamedPath');
    
    fs.rename('append.txt', 'renamed.txt', (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("File renamed successfully");
        }
    });
}

module.exports = {
    main: main
};
