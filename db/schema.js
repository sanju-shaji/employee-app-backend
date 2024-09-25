const mongoose=require('mongoose')

const ems=mongoose.Schema({
    EmployeeName:String,
    EmployeeDesignation:String,
    EmployeeLocation:String,
    Salary:Number
})

const empschema=mongoose.model('empdata',ems);

module.exports=empschema