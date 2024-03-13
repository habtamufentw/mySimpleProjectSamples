require("dotenv").config();
const express=require("express");
const cors=require("express");
const app=express();
require('./db/conn');
const router=require('../Routes/rouer');
const port=3001;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
  console.log("server start");
})