const { query } = require('express');
const express = require('express');
const { Result } = require('express-validator');
const { connect } = require('../connectDb');
const database = require('../connectDb');
const router = express.Router();
router.get('/login', (req, res) => {
var account = req.query;
var accountbody = req.body;
var query = "select * from users where username = ? and password = ?";
database.query(query,[account.username,account.password],(err,rows)=>{
    if (!err) {
        if (rows.length == 0 ) {
            database.query(query,[accountbody.username,accountbody.password],(err,rows)=>{
                if (!err) {
                    if (rows.length == 0 ) {
                        return res.status(200).json({status:"false",response:"Unknow username or Password"});
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
module.exports = router;