const express = require ("express")
const app = express ()
app.get("/",(req,res)=>{
    res.send("Hola soy Goku")
})

app.listen(3000,()=>{
    console.log("Servidor a la espera de Conexiones")
})