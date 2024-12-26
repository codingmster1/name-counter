
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 5000;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
     res.render("home.ejs")

    })

app.post("/submit", (req, res) => {
    const numLetters = req.body["fname"].length + req.body["lname"].length
    res.render("home.ejs", { numberOfLetters: numLetters})
})

app.listen(port, (req, res) => {
     console.log("App is running on port 5000")
})

