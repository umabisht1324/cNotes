const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    // obj={
    //     title:'new',
    //     desp:'wdsd'
    // }
    res.json([]);
});
module.exports=router;