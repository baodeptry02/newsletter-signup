const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function () {
    console.log('listening on port 3000')
})