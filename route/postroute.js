const express=require('express');
const router=express.Router();
const res=require('./restult.js');
router.use('/restult',res);
module.exports=router;
