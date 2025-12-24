import express from 'express'

const app = express()

app.get('/name',(request,response)=>{
response.send('we are learning get API')
})

app.get('/',(request,response)=>{
    response.send("this is home page..")
})

app.get('/designation',(request,response)=>{
    response.send("This is designation page..")
})
app.get('/service',(request,response)=>{
    response.send('This is service page')
})
app.listen(5000,()=>{
    console.log("successfully run server...")
})