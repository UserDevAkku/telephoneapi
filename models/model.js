const mongoose=require("mongoose")
let dataSchema,telephns;
    //schema
try  {
    dataSchema = new mongoose.Schema({
       telephn_no: {
           type: String,
           required: true,
           unique: true
       }
   })
   console.log('schema designed successfully')
}
catch(error)
{
   console.log(`this error: ${error} is found`)
   console.log('error in designating of schema ')
}
//collection
try {
            
telephns = new mongoose.model('telephns', dataSchema)
    console.log('collection has created successfully')
 
 }
 catch(error){
    console.log(`this error: ${error} is found`)
    console.log('error in creation of collection')
 }

 module.exports=telephns;