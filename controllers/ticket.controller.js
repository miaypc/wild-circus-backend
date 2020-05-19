const ticketService = require("../services/ticket.services");

const createTicket = async (req, res, next) => {
  try {
    const ticket = await ticketService.createTicket({
      name: req.body.name,
      numberOfTickets: req.body.numberOfTickets,
      gallery: req.body.gallery,
    });
    res.status(200).json({ result: ticket });
  } catch (err) {
    next(err);
  }
};

const getTickets = async (req, res, next) => {
  try {
    const tickets = await ticketService.getTickets();
    res.status(200).json({ result: tickets });
  } catch (err) {
    next(err);
  }
};

const getTicketById = async (req, res, next) => {
  try {
    const ticket = await ticketService.getTicketById(req.params.id);
    res.status(200).json({ result: ticket });
  } catch (err) {
    next(err);
  }
};

const deleteTicketById = async (req, res, next) => {
  try {
    const ticket = await ticketService.deleteTicketById(req.params.id);
    res.status(200).json({ result: "deleted", deleteTicketById: ticket });
  } catch (err) {
    next(err);
  }
};

const updateTicketById = async (req, res, next) => {
  try {
    const ticket = await ticketService.updateTicketById(
      req.params.id,
      req.body
    );
    res.status(200).json({ result: "updated", updateTicketById: ticket });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicketById,
  updateTicketById,
};
