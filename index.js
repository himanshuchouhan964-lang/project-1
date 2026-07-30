const express = require("express");
const bodyParser = require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile("contact.html");
});
app.post("/clgform",(req,res)=>{
    let{studentname,email,subject,textarea}=req.body;
    res.send(`studentname:- ${studentname}<br>
        email:- ${email}<br>
        subject:- ${subject}<br>
        textarea:- ${textarea} 
        `)
});


app.listen(2525,()=>{
    console.log("Server Runing");
    
});