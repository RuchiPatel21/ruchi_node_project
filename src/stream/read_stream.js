function main(req,res){
const fs = require("fs");

console.log("Ruchi")
const rs = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
// const ws = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
// const ws = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
let i=0;
rs.on("data",(chunks)=>{
i++;
console.log(`chunks length`,chunks.length);
console.log(`chunks ${i}`,chunks.toString());
// res.send(chunks);
})
rs.on("error",(error)=>{
console.log("error".error);

})
rs.on("end",(chunks)=>{
// console.log("chunks",chunks);
console.log("done");

res.send("Ruchi");
})

}
module.exports={
    main
}