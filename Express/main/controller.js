// export const usernameCont= (req,res)=>{
//     const username = req.params.username;
//     res.send(`Welcome ${username}`)
// }

// export const searchCont=(req,res)=>{
//     const keyword = req.query.keyword;
//     res.send(`searching for ${keyword}`);
// }

export const userLogin =(req,res)=>{
    res.send('this is user login route')
}

export const userSignup =(req,res)=>{
    res.send('this is user signup  route')
}