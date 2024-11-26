function main(req, res) {
    const fs = require('fs');
    
    let data = req.body;
    fs.appendFile('append.txt', JSON.stringify(data), (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Data appended successfully");
        }
    });
}

module.exports = {
    main: main
};
