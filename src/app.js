const express = require('express');
const app=express();
const port =8000;
const path= require('path')
const hbs =require('hbs');
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)


app.use(express.static(path.join(__dirname,"../public")));


app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})


app.get("/weather",(req,res)=>{
    res.render("weather")
})


app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg : 'Oops ! Page Not Found'
    })
})

app.listen(port,()=>{
    console.log("listening to port 8000")
})