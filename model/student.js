const mongoose = require("mongoose")
// const { Email } = require("read-excel-file")
const StudentSchema = new mongoose.Schema({
    Roll_No:{source:"Roll No",type:Number ,required:true},
    Name:{source:"Name",type:String,required:true},
    Email_Address:{source:"Email Address",type:String,required:true},
    Contact:{source:"Contact",type:String,required:true},
    Semester:{source:"Semester",type:String,required:true}
    })
    
    const model =  mongoose.model("student",StudentSchema)
    module.exports = model