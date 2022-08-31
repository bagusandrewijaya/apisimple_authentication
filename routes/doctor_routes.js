const { query } = require('express');
const express = require('express');
const { Result } = require('express-validator');
const { connect } = require('../connectDb');
const database = require('../connectDb');
const imagesUpload = require('../helpers/images-upload');
const router = express.Router();
router.post('/upload', imagesUpload.upload.single('image'), (req, res, next) => {
    const file = req.file;
    const params = req.body;
    if (!file) {
       return res.status(400).send({ message: 'Please upload a file.' });
    }
    var sql = "INSERT INTO doctor(nama,category,directchat,poto) VALUES (?,?,?,?)";
    database.query(sql,[params.nama,params.category,params.directchat,req.file.filename], function(err, result) {
        return res.send({ message: 'File is successfully.', file });
     });
 });
 router.get('/all', (req, res) => {
 var sql = "select * from doctor";
 database.query(sql,(err,rows)=>{
    if (!err) {
        if (rows.length == 0) {
            return res.status(200).json({status:"false",response:"no data"});
        }else{
            return res.status(200).json(rows);
        }
    }
})
 });
module.exports = router;