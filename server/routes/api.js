const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number field is required']
    },
    company: {
        type: String,
        required: [false, 'Company field is optional']
    },
    officeVisit: {
        type: String,
        required: [true, 'Office visit is required']
    },
    escortName: {
        type: String,
        required: [false, 'Escort is optional']
    },
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

// admin get users
router.get('/admin', (req, res) => {
    User.find({}).then(function(posts){
      let data = posts.reverse();
      console.log('Sending', data);
      res.send(data);
    })
});

// sign in
router.post('/signin', function(req, res, next){
    //check is user email exist
    console.log("User sign in attempt ", req.body);
    User.findOne({'email':req.body.email}).then(function(user){
        if(user == null)
        {
            User.create(req.body).then(function(user){
                console.log('User Signed In');
                res.send({'status':'success'});
            }).catch(next);
        }
        else{
            let s = "user with email: "+ req.body.email +" already exist"; 
            res.send({'status':'failure'});
        }        
    }).catch(next);

   
});


module.exports = router;