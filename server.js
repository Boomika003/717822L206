const express= require("express");
const Decimal= require("Decimal");
const cors=require("cors");
import fetchImport from"../fetchNumber.js";
const app=express();
const port=process.env.PORT ||3000;

app.use(express.json());
app.use(cors());



