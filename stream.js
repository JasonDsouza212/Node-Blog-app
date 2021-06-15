const fs=require('fs');
const read=fs.createReadStream('./docs/txt.txt',{encoding:'utf8'});
const write=fs.createWriteStream('./docs/txtt.txt');
read.on('data',(chunk)=>{
    console.log("------------new string----------------");
    console.log(chunk);
    write.write("\n new chun added \n")
    write.write(chunk);

});
read.pipe(write);