var express=require("express");
var app=express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.post('/upload', upload.single('fileinput') , function(req, res){
    if(req.file)
    {
    res.json({size:req.file.size});
    }
    else
    {
        res.status(400).send('Invalid File');
    }
});

app.listen(process.env.PORT, ()=>{
    console.log('listening');
})