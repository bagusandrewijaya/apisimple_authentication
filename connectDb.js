const mysql = require('mysql2');
var connect = mysql.createConnection(
    {
        host:"containers-us-west-21.railway.app",
        user:"root",
        password:"fHdegJ17utSerfPIH3WE",
        database:"railway",
        port:6740,
        insecureAuth : true
       
        
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