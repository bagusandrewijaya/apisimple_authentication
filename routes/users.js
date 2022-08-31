const { query } = require('express');
const express = require('express');
const { Result } = require('express-validator');
const { connect } = require('../connectDb');
const database = require('../connectDb');
const router = express.Router();

router.get('/alldoctor', (req, res) => {
var query = "Select * from users";
database.query(query,(err,rows)=>{
    if (!err) {
        if (rows.length == 0) {
            return res.status(200).json({status:"false",response:"no data"});
        }else{
            return res.status(200).json(rows);
        }
    }
})
});
router.get('/login', (req, res) => {
var account = req.query;
var accountbody = req.body;
var query = "select * from users where email = ? and password = ?";
database.query(query,[account.email,account.password],(err,rows)=>{
    if (!err) {
        if (rows.length == 0 ) {
            database.query(query,[accountbody.email,accountbody.password],(err,rows)=>{
                if (!err) {
                    if (rows.length == 0 ) {
                        return res.status(200).json({status:"false",response:"Unknow email or Password"});
                    }else{
                        
                        return res.status(200).json({status:"true",rows});
                    }}else{
                    return res.status(500).json(err);
                }
            })
        }else{
            
            return res.status(200).json({status:"true",rows});
        }}else{
        return res.status(500).json(err);
    }
})
});


router.post('/register', (req, res) => {
    var dataparams = req.query;
    var insert = "insert into users(email,username,password,role) values(?,?,?,2)";

    database.query(insert,[dataparams.email,dataparams.username,dataparams.password],(err,result)=>
    {
        if (!err) {
            return res.status(200).json({status:"true",response:"Succesfully Registered!"});
        }else{
            return res.status(200).json({status:"false",response:"Email Hasbeen Registered"});
        }
      
    }
    )

});
module.exports = router;