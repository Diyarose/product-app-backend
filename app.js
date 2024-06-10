const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/product")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/search",(req,res)=>{
    res.send("Search")
})
app.post("/delete",(req,res)=>{
    res.send("Delete")
})
app.post("/view",(req,res)=>{
    res.send("View")
})

app.listen(8080,()=>{
    console.log("server started")
}) 