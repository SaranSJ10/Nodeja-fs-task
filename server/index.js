const express = require('express');
const app = express();
const fs = require("fs");


let content = ()=>{
    let date = new Date().toLocaleTimeString();
    fs.writeFile("./ndm.txt",date,(err,data)=>{
        if(err){console.log(err);}
        else{console.log("created")}
    })
}

app.get("/time", (req,res)=>{
    res.send(content );

})
app.listen(3000,()=>console.log("port created"));

