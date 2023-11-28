const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
    nome: String,
    telefone: String, 
    email: String,
    checkin: String,
    checkout: String,
    valorTotal: String,
});

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = {
    Reserva
}
