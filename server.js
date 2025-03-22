const express= require("express");
const Decimal= require("Decimal");
const cors=require("cors");
const fetchNumber=require("fetchNumber");
const app=express();
const port=process.env.PORT ||3000;

app.use(express.json());
app.use(cors());

const server= async.get("/numbers",(req,res)=>{
    if(req.method==='GET'){
         server.handleRequest(req,res);
    }
    else{
        server.status(404).json({error:"Not Found"});

    }
});
 const PORT=3000;
 server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
 })



