const express=require('express')
const app=new express()
const routes=require('./routes/routes')
app.use('/',routes)

require('./connection/connection')


app.set('view engine','ejs')// view engin format seting 
app.set('views',__dirname+'/views')//view path setting




app.listen(3000,()=>{
    console.log('server running........')
})