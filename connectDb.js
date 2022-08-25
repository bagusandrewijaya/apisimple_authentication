const mysql = require('mysql');
var connect = mysql.createConnection(
    {
        host:"blmhsb5dsyfygebeeakt-mysql.services.clever-cloud.com",
        user:"u6hwfxsquz7uxz68",
        password:"UmKQKheZHdYKgJLRCVw5",
        database:"blmhsb5dsyfygebeeakt",
        port:3306,
       
        
    }
);
connect.connect((err)=>{
    if (!err) {
        console.log("Database connected");
    }else{
        console.log(err);
    }
});

module.exports = connect;   