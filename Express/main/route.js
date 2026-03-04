import express from'express'
import { userLogin,userSignup } from "./controller.js";


const router=express.Router()

router.use('/users',(req,res,next)=>{
    res.send("routing middleware")
    next()
})

router.get('/login',userLogin)
router.get('/signup',userSignup)

export default router