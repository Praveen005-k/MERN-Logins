const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/whatsapp")

const userScehma = new mongoose.Schema({
    email : String,
    password : String
})

const userModel = mongoose.model('users', userScehma)


app.post('/login', (req, res)=>{

    const {email, password} = req.body ;
    userModel.findOne({ email : email})
        .then(user => {
            if(user){
                if(user.password === password){
                    res.json('Login successfully')
                }else{
                    res.json('The password is incorrect.')
                }
            }else{
                res.json('No record existed.')
            }
        })
})

app.listen(3000, ()=>{
    console.log('3000 server running.');
    
})