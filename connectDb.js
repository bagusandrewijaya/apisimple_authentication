const mysql = require('mysql');
var connect = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"rsud_bogor",
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