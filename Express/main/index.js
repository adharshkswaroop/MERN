import express from'express'
import multer from 'multer';
import { storage , upload} from './config/multer.js';

const app=express()
const PORT=3000;

app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))
app.post('/form',(req,res)=>{
    console.log(req.body)  
    console.log(req.file);
    res.send('form received')
})


app.get('/',(req,res)=>{
    res.send('jello faaahhh!!')
}) 


app.listen(PORT,()=>{
    console.log(`server is running on http://locahost:${PORT}`);
})

