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
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    const data = {
        member: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME : firstName,
                    LNAME: lastName,
                }
            }
        ]
    }
    // vậy là đã hoàn thành xong object data, now we have to turn this into a flatpack json.
    var jsonData = JSON.stringify(data) // chuyển data thành string format of a json


    // api key 0f70c58187548e111b69e009f55e0719-us21
    // audience ID: a82643a68d
})


app.listen(3000, function () {
    console.log('listening on port 3000')
})