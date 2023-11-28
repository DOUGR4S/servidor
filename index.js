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
    res.setHeader("location", "http://projeto-hotel-nine.vercel.app"
    );
    res.end();
});

app.post("/", (req, res)=>{
    const {nome, email, telefone, checkin, checkout, valorTotal} = req.body;
    insertReserva(nome, email, telefone, checkin, checkout, valorTotal);
    res.redirect("http://127.0.0.1:5501/reservaConcluida.html");
});

//TIJb9gBpzYZ0RZ2q (senha MongoDB)


mongoose.connect("mongodb+srv://dadsddodo68:TIJb9gBpzYZ0RZ2q@cluster0.yed66as.mongodb.net/?retryWrites=true&w=majority");

function insertReserva (nome, email, telefone, checkin, checkout, valorTotal) {
    const estadia = new Reserva({
        nome: nome,
        email: email, 
        telefone: telefone,
        checkin: checkin,
        checkout: checkout,
        valorTotal: valorTotal,
    });
    estadia.save();
}