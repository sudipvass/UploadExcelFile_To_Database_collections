const {urlencoded,json} = require("express")
const express = require("express")
const path = require("path")
const router = require("./routes")
const bodyparser = require("body-parser")

function app(){
    const app = express()
    app.use(urlencoded({extended:false}))
    app.use(json())
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(bodyparser.json())
    app.set("view engine","ejs")
    app.set("views",path.resolve(__dirname,"./views"))
    app.use(express.static(path.resolve(__dirname,"./public")))
    app.use('/',router)
    return app
}

module.exports = app()