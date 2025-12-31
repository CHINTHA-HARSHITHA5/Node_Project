
import mongoose  from "mongoose";

const employeeschema  = new mongoose.Schema({
    // name,email,phone,city
    empid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default:false
    },
    city:{
        type:String
    }
})


const Employee = mongoose.model("Employee",employeeschema)

export default Employee
