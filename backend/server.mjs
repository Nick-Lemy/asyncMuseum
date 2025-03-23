import express from 'express'
const app = express()
app.get('/', (req, res)=>{
    return res.send('Hey there!')
})
app.listen(3612, ()=>{
    console.log('http://localhost:3612')
})