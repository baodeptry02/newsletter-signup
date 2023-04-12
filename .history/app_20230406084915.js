const app = require('express')

const bodyParser = require('body-parser')

const request = require('request')

app.get('/', function(req,res) {
    res.send(__dirname + '/signup.html')
})

app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function () {
    console.log('listening on port 3000')
})