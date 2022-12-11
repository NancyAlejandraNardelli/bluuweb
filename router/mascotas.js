const express=require('express');
const router=express.Router();
const {getAnimales} = require('../models/animales');



router.get('/',(req,res)=>{
    res.render('mascotas',{
        arrayMascotas:[
            {id:'01',nombre:'pepe',descripcion:'loro vegano'},
            {id:'02',nombre:'pepa',descripcion:'esposa'},
            {id:'03',nombre:'ali',descripcion:'mordelon'},
        ]
            
    })
})

router.get('/animales',async (req,res)=>{

    const arrayMascotas = await getAnimales()
   
    res.render('mascotas',{
        arrayMascotas
    })
    

})
module.exports=router;