const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfTickets: {
    type: Number,
  },
  gallery: {
    type: String,
    enum: ["Mollys Gallery", "Red Beans Gallery", "Tofus Gallery"],
  },
});

const TicketSchema = mongoose.model("ticket", ticketSchema);
module.exports = TicketSchema;
