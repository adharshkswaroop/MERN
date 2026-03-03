/* Routing in ExpressJS: app. METHOD (PATH, HANDLER);

    A route in ExpressJS consists of:
    METHOD → HTTP method (GET, POST, PUT, DELETE) = CRUD
    PATH URL route (e.g., /, /users)
    HANDLER Function that runs when the route is accessed
*/  

/* 
Express allows dynamic routing using route parameters and query strings.
Dynamic Routes
    Dynamic Route -http://localhost:3000/user/John
    Used to capture dynamic values from the URL.
    Defined using parameter_name.
    Query Strings
    Query Strings http://localhost:3000/search?keyword=ExpressJS -
    Used to pass optional data in the URL after ?.
    Extracted using req.query.
*/
// import express from 'express';
// // import { searchCont,usernameCont } from "./controller.js";
// // import { userLogin,signLogin } from "./controller.js";
// import router from './route.js'

// const app=express();
// const PORT=3000;

// app.get('/',(req,res)=>{
//     res.send('hello Alaric world');
// })

// // app.get('/about',(req,res)=>{
// //     res.send('about routing');
// // })
// // app.get('/about/contact',(req,res)=>{
// //     res.send('contact routing');
// // })

// // Dynamic route
// // app.get('/:username', usernameCont)

// // query route
// // app.get('/search',searchCont)

// // app.get('/userLogin',userLogin)
// // app.get('/signLogin',signLogin)

// app.use('/user',router)


import express from'express'
import router from './route.js'

const app=express()
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("hello, express")
})

app.use('/user',router)

app.post('/users',express.json() ,(req,res)=>{
    const {name,email}=req.body
    res.json({
        message:`user ${name} with email ${email} Created succesfully`
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on http://locahost:${PORT}`);
})

