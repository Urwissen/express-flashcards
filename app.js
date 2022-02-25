const express = require("express")

const app = express()

app.set("view engine", "pug")

app.use(express.urlencoded())

// ROUTES GET
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cards", (req, res) => {
    res.render("card", {prompt: "red in german", hint: "A big o in the middle"})
})


app.get("/hello", (req, res) => {
    res.render("hello", req.body.username ? { name: req.body.username } : { name: "anon" } )
})


// ROUTES POST
app.post("/hello", (req, res) => {
    res.render("hello", req.body.username ? { name: req.body.username } : { name: "anon" } )
})


// LISTEN
app.listen(3000, () => {
    console.log("App run on localhost:3000")  
})