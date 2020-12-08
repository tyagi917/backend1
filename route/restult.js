const express=require('express');
const router=express.Router();
const {Candidatefield,Testscore,Restult}=require('../controller/apicontroller.js');
router.post('/candidate',Candidatefield);
router.post('/testscore',Testscore);
router.get('/apirestult',Restult)
module.exports=router;