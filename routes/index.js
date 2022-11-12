const {Router} = require("express")
const router = Router()
const handler = require("./handlers")
const{Upload} = handler
router.get("/",Upload,(req,res)=>{
    res.render("index.ejs")
})
module.exports = router