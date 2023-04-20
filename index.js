const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.send('<h1>hello, this is kubernetes team from abs pvt solutions</h1>');
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
