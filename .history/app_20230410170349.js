const express = require('express')

const bodyParser = require('body-parser')

const request = require('request')

const https = require('https')

const app = express()

app.use(express.static('public')) // cần phải thêm cái này để chuyển mấy file tĩnh (static file) lên localhost, tạo thêm 1 folder public rồi chuyển file css và folder img vào là được

app.get('/', function(req,res) {
    res.sendFile(__dirname + '../signup.html')
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/', function(req, res) {
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    const data = {
        members: [
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
    const jsonData = JSON.stringify(data) // chuyển data thành string format of a json

    const url = "https://us21.api.mailchimp.com/3.0/lists/a82643a68d"
    // có rất nhiều danh sách nên phải cho nó biết mình muốn đăng kí thành viên vào danh sách nào, trước đó mình đã lưu audience ID rồi nên chỉ cần dán vào thôi
    // audience ID: a82643a68d

    const options = {
        method: "POST",
        auth: "baodeptry02:0f70c58187548e111b69e009f55e0719-us21" /* làm theo format của mailchimp */
    }


    
   const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
        console.log("Successfully response!")
    } else {
        console.log("Error")
    }

        response.on('data', function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData) /* post jsonData to the mailchimp server */
    request.end()

    // api key 0f70c58187548e111b69e009f55e0719-us21
})



app.listen(3000, function () {
    console.log('listening on port 3000')
})