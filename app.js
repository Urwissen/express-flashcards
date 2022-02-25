const express = require("express")
const { cookie } = require("express/lib/response")
const cookieParser = require("cookie-parser")

const app = express()

app.set("view engine", "pug")

app.use(express.urlencoded())
app.use(cookieParser())

// ROUTES GET
app.get("/", (req, res) => {
    const name = req.cookies.username

    if (name) {
        res.render("index", { name })
    } else {
        res.redirect("hello") 
    }
    
})

app.get("/cards", (req, res) => {
    res.render("card", {prompt: "red in german", hint: "A big o in the middle"})
})


app.get("/hello", (req, res) => {
    res.render("hello", { name: req.cookies.username })
})


// ROUTES POST
app.post("/hello", (req, res) => {
    res.cookie("username", req.body.username)
    res.redirect("/")
})

app.post("/goodbye", (req, res) => {
    res.clearCookie("username")
    res.redirect("/")
})


// LISTEN
app.listen(3000, () => {
    console.log("App run on localhost:3000")  
})