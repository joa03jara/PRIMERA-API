const express = require ("express")
const app = express ()

app.use(require("./Routes/index.routes"))

app.listen (3000,()=>{
    console.log("servidor a la espera de conexion")
})
