const express = require('express')

const bodyParser = require('body-parser')

const request = require('request')

const app = express()

app.use(express.static('public')) // cần phải thêm cái này để chuyển mấy file tĩnh (static file) lên localhost, tạo thêm 1 folder public rồi chuyển file css và folder img vào là được

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/signup.html')
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/', function(req, res) {
    var firstName = req.body.fName
    var lastName = req.body.lName
    var email = req.body.email
    var data = {

    }
    // api key 0f70c58187548e111b69e009f55e0719-us21
    // audience ID: a82643a68d
})


app.listen(3000, function () {
    console.log('listening on port 3000')
})