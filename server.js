const readXLSfile = require("read-excel-file/node")
const fs = require("fs")
const xlsx = require("xlsx")
const multer = require("multer")
const csvtojson = require("csvtojson")
const student = require("./model/student")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/rmsdatabase")
const app = require("./app")
let slectedfile;
var excelStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var uploads = multer({ storage: excelStorage })
app.post("/uploadfiles", uploads.single('uploadfile'), (req, res) => {
    let path = req.file.path
    var workbook = xlsx.readFile(path)
    var workbook = xlsx.readFile(path)
    var SheetNameList = workbook.SheetNames
    console.log(SheetNameList)
    var x = 0;
    SheetNameList.forEach(element => {
        var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[SheetNameList[x]]);

        console.log(xlData)
        student.insertMany(xlData, (err, data) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log("successfully inserted",{result:data})
            }
        })
        x++;
    })
    res.redirect("/")
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port:${port}`);
})



