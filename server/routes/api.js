const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    }
});

const User = mongoose.model('user', UserSchema);

// router API

// admin login
router.post('/adminlogin', function(req, res, next){
    //res.send({type: 'GET'});
    console.log('Log in request received @'+Date.now);
    /*
    User.findOne({'email':req.body.email}).then(function(user){
        let log = '';
        if(user == null)
        {
            log += 'User does not exist, please register new user';
            res.send({err:log});
        }
        //check password
        if(req.body.password === user.password)
        {
            console.log('User log in successful');
            res.send(user);
        }
        else{
            log += 'incorrect user name and password';
            res.send({err:log});
        }
    
    }).catch(next);
    */
});

// sign in
router.post('/signin', function(req, res, next){
    //check is user email exist
    User.findOne({'email':req.body.email}).then(function(user){
        if(user == null)
        {
            User.create(req.body).then(function(user){
                console.log('User Signed In');
                res.send(user);
            }).catch(next);
        }
        else{
            let s = "user with email: "+ req.body.email +" already exist"; 
            res.send({err:s});
        }        
    }).catch(next);

   
});


module.exports = router;