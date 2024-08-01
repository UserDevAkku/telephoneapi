const mongoose = require('mongoose');
//function to chk connection
let dbs;
const dbStatus = async () => {
    try {
    dbs = await mongoose.connect('mongodb://localhost:27017/userDB')
    console.log("connected successfully");
    }
    catch(error)
    {
        console.log(error)
        console.log('connection error')
    }
}

//calling function
dbStatus();
//exporting 
module.exports=dbs;