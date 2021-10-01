var test=require("./requirement_txt");
var fs=require("fs");

fs.mkdirSync("fol1");
fs.writeFileSync("fol1/file1.txt","Hello! This is Anugya",
    (err)=>{
        if(err){
            console.log(err);
        }
    }
);
fs.appendFileSync("fol1/file1.txt"," Jain.");
fs.readFileSync("fol1/file1.txt","utf-8");
fs.renameSync("fol1/file1.txt","fol1/file.txt");

//fs.unlinkSync("fol1/file.txt");
//fs.rmdirSync("fol1");

var obj1=new test.Test1();
var obj2=new test.Test1();
var a=obj1.print();
var b=obj2.print();
console.log(a);
console.log(b);