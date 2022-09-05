const mysql = require('mysql2');
var connect = mysql.createConnection(
    {
        host:"containers-us-west-28.railway.app",
        user:"root",
        password:"wbDeDHsboNod4sDaEWUU",
        database:"railway",
        port:5873,
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