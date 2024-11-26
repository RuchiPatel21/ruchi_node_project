function main(req, res) {
    const fs = require('fs');
    
   
    
    fs.unlink('new_file.txt', (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("File deleted successfully");
        }
    });
}

module.exports = {
    main: main
};
