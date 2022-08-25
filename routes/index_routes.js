const { query } = require('express');
const express = require('express');
const { Result } = require('express-validator');
const { connect } = require('../connectDb');
const database = require('../connectDb');
const router = express.Router();

router.get('/', (req, res) => {
var account = req.query;

    return res.status(200).json({status:"200",Version:"API_VERSION_1",Developer:"BAgus Andre Wijaya",});
});
module.exports = router;