// import express from 'express'
import multer from "multer";

export const storage= multer.diskStorage({
    destination:'uploads', 
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+Date.now()+file.originalname)
    }
})

export const upload= multer({
    storage,
    limits:{fileSize:1024000} 
})
