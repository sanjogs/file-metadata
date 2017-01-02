var express=require("express");
var app=express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.get('/upload', function(req, res){
    console.log('upload request');
    
})

app.listen(process.env.PORT, ()=>{
    console.log('listening');
})