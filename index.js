const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Reserva } = require("./reserva");

app.use(bodyParser.urlencoded({extended: true}));


app.listen(8000, ()=>{
    console.log("servidor aberto");
});

app.get("/", (req, res)=>{
    res.sendFile('public/index.html', { root: __dirname});
});

app.post("/", (req, res)=>{
    const {nome, email, telefone, checkin, checkout, valorTotal, quartoReservado} = req.body;
    insertReserva(nome, email, telefone, checkin, checkout, valorTotal, quartoReservado);
    res.sendFile('public/reservaConcluida.html', { root: __dirname});
});

//TIJb9gBpzYZ0RZ2q (senha MongoDB)


mongoose.connect("mongodb+srv://dadsddodo68:TIJb9gBpzYZ0RZ2q@cluster0.yed66as.mongodb.net/?retryWrites=true&w=majority");

function insertReserva (nome, email, telefone, checkin, checkout, valorTotal, quartoReservado) {
    const estadia = new Reserva({
        nome: nome,
        email: email, 
        telefone: telefone,
        checkin: checkin,
        checkout: checkout,
        valorTotal: valorTotal.replace("R$ ", ""),
        quartoReservado: quartoReservado,
    });
    estadia.save();
}
