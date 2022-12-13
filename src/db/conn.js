
require('dotenv').config()
const url=process.env.MONGO_URL
console.log(url)
const mongoose=require("mongoose")
mongoose.connect(url)
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log("******************************8",err))
