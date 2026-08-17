import express from "express"

import dados from "../repository/banco.js"


const router = express.Router()

router.post("/somar", (req, res) => {
    const { numero1, numero2 } = req.body

    const somar = (Number(numero1) + Number(numero2))

    dados.push({ somar })

    res.status(200).send({
        mensagem: somar
    })

})


router.post("/menos", (req, res) => {
    const { numero1, numero2 } = req.body

    const menos = (Number(numero1) - Number(numero2))

    dados.push({ menos })

    res.status(200).send({
        mensagem: menos
    })

})



router.post("/divisao", (req, res) => {
    const { numero1, numero2 } = req.body

    const divisao = (Number(numero1) / Number(numero2))

    dados.push({ divisao })

    res.status(200).send({
        mensagem: divisao
    })

})


router.post("/multiplicar", (req, res) => {
    const { numero1, numero2 } = req.body

    const multiplicar = (Number(numero1) * Number(numero2))

    dados.push({ multiplicar })

    res.status(200).send({
        mensagem: multiplicar
    })

})




router.post("/potencia", (req, res) => {

   
    const { numero1, } = req.body
    const potencia = (Number(numero1) ^ 5)

    dados.push({ potencia })

    res.status(200).send({
        mensagem: potencia
    })

})


router.post("/raiz", (req, res) => {

   
    const { numero1, } = req.body
    const raiz = (Number(numero1) / numero1)

    dados.push({ raiz })

    res.status(200).send({
        mensagem: raiz
    })

})



router.get("/listar", (req, res) => {
    res.status(200).send({
        mensagem: dados
    })
})


export default router