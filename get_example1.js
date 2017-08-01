var express = require('express');  
var app=express();  
app.get('/get_example1', function (req, res) {  
res.send('<p>Username: ' + req.query['first_name']+'</p>'
		'<p>Lastname: '	+req.query['last_name']+'</p>'
		'<p>email:' 	+req.query['email_id']+'</p>'
		'<p>phone:' 	+req.query['phone_number']+'</p>'
 
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})     