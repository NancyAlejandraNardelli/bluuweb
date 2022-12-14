const { application } = require('express');

express=require('express');
app=express();
app.use(express.static(__dirname + '/public'));

const port=3000;
//Motor de plantilla
app.set('view engine', 'ejs');
//que van a estar en la carpeta views
app.set('views', __dirname + '/views');

//Rutas Web
app.use('/',require('./router/rutasWeb'))
app.use('/mascotas',require('./router/mascotas'))


app.listen(port,()=>{
    console.log('servidor a su servicio en el puerto', port )
})


app.use((req,res,nex)=>{
    //res.status(404).sendFile(__dirname + '/public/404.html')
    res.status(404).render('404')
})
//const http=require('http');
//javaScript vainilla sin express
// const server=http.createServer((req,res)=>{
//     res.end('hola mundo v2')
// })
// const puerto=3000
// server.listen(puerto,()=>{
//     console.log('escuchando solicitudes')
// })

