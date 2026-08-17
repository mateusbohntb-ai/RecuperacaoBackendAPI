import express from "express"

import cauculadora from "./router/cauculador.js"

const app = express()

app.use(express.json())


app.use("/api/v1/cauculador" , cauculadora)


app.listen(3000 , ()=>{
    console.log("Servidor ouvindo na porta 3000")
})

