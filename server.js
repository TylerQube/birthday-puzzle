var express = require('express')
var app = express()
var path = require('path')

/*app.all('/resources/*', function(req, res) {
	res.send('Nice Try!')
})*/
app.use(express.static(__dirname))

app.get('/', function(req, res) {
	res.sendFile('index.html', { root: __dirname })
})

app.listen(8000, '192.168.1.64')
console.log("Server listening on port 8000")
