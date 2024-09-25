const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://sanju:Abc1234@cluster0.g9obo.mongodb.net/employeeServer?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("connection established")
}).catch(()=>{
    console.log('error in connection')
})