const jwt = require('jsonwebtoken');
const express= require('express');
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req, res)=>{
    res.send(`Hello world from the router server `)
})
//using promises
// router.post('/register',(req, res)=>{
//     const {name, email, phone, work, password, cpassword} = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword ){
//         return res.status(422).json({error: "please filled the field properly"})
//     }

//     User.findOne({ email:email })
//         .then((userExist)=>{
//             if(userExist){
//                 return res.status(422).json({error:"Email already exist"});
//             }

//         const user = new User({ name, email, phone, work, password, cpassword});

//         user.save().then(()=> {
//             res.status(201).json({message: "user registered successfully"});
//             })
//             .catch((err)=>res.status(500).json({error: "Failed to registered"}));
//         }).catch((err)=>{console.log(err);});

// });


//using aync-await
router.post('/register',async(req, res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error: "please filled the field properly"});
    }
    try {
        const  userExist = await User.findOne({ email:email })
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password is not matching"});
        }else{
            const user = new User({ name, email, phone, work, password, cpassword});

            await user.save();
            res.status(201).json({message: "user registered successfully"});
        }   
    }
    catch(err){
        console.log(err);
    }   
});

router.post('/signin',async(req, res)=>{
    try{
    const { email, password } = req.body;

    if ( !email || !password ){
        return res.status(400).json({error: "please filled the field properly"});
    }
        const  userLogin = await User.findOne({ email:email })
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly : true 
            });

 
            if(!isMatch){
                return res.status(400).json({error:"Invalid credentials"});
            }
              res.status(201).json({message: "user signin successfully"});
            
        }else{
            return res.status(400).json({error:"Invalid credentials"});
            
        } 
        
        
    }
    catch(err){
        console.log(err);
    }   
});

//about us
router.get('/about', authenticate,(req, res)=>{
    console.log(`hello my aboutus`);
    res.send(`Hello about,world from the server`)
})
module.exports = router; 