const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.render('mascotas',{
        arrayMascotas:[
            {id:'01',nombre:'pepe',descripcion:'loro vegano'},
            {id:'02',nombre:'pepa',descripcion:'esposa'},
            {id:'03',nombre:'ali',descripcion:'mordelon'},
        ]
            
    })
})
module.exports=router;