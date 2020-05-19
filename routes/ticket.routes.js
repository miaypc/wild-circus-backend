const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket.controller");

router.post("/", ticketController.createTicket);
router.get("/", ticketController.getTickets);
router.get("/:id", ticketController.getTicketById);
router.delete("/:id", ticketController.deleteTicketById);
router.patch("/:id", ticketController.updateTicketById);

module.exports = router;
