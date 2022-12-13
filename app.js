dotenv = require("dotenv")

require("./src/db/conn")
require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT|| 4000
let cors = require("cors")
const Mydb = require("./src/model/todo")
app.use(express.json())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//getting todo
app.get("/getdata",async (req,res)=>{
  const data = await Mydb.find()
     res.send(data)//json data
  })

//save and get todo
app.post("/todo",async (req,res)=>{
  console.log(req.body)
  var savetodo=new Mydb({//instance of our collection to save
    item:req.body.val
   
  })
  await savetodo.save()
  const data = await Mydb.find()
     res.send(data)//json data
  })

  // delete todo
  app.post("/delete", async(req, res)=>{
    const id =req.body
    console.log(id)
    Mydb.findByIdAndDelete({_id:id.ind}).then(()=>{
      console.log("deleted")
    }).catch((err)=>console.log(err))
    const data = await Mydb.find()
       res.send(data)//json data

  })
  //todo update
  app.post("/update", async(req, res)=>{
   let {_id,item}=req.body
   Mydb.findByIdAndUpdate(_id,{item}).then(()=>console.log("updated"))
   const data = await Mydb.find()
   res.send(data)
  })
 app.listen(port,()=>{
 console.log(`listening at port ${port}`)
 })
