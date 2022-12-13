const mongoose = require("mongoose")
require("../db/conn")
const playlistSchema= new mongoose.Schema({
    item:"String"
})
const Mydb=new mongoose.model("Mydb",playlistSchema)

module.exports=Mydb