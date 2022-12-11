const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    //res.send('Mi respuesta desde express')
    res.render('index',{titulo:'Mi título dinámico'})
   })
   
   router.get('/servicios',(req,res)=>{
       //res.send('Bienvenidos a la página de servicios')
       res.render('servicios',{tituloServicio:'Bienvenidos a la página de servicios'})
   })
module.exports=router;
   

