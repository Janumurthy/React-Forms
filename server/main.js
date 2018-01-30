const express= require('express')
const app=express()
const nunjucks = require('nunjucks')
var njIncludeData = require('nunjucks-includeData');

var path = require('path');
app.set('views', __dirname + './../client/html');
var nunjucksEnv = nunjucks.configure(app.get('views'),{
	autoescape:true,
	express:app	
}); 

njIncludeData.install(nunjucksEnv); 
app.use(express.static(path.join(__dirname, './../client')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.use(function(req,res){
	console.log("This is a "+ req.method + " to "+ req.url)
	res.render('index.html')
});
	
app.listen(8080,function(){
	console.log(app.get('views'));
});
