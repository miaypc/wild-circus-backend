const TicketSchema = require("../models/ticket.model");

const createTicket = async (reqBody) => {
  const ticket = await TicketSchema.create(reqBody);
  return ticket;
};

const getTickets = async () => {
  const tickets = await TicketSchema.find();
  return tickets;
};

const getTicketById = async (ticketId) => {
  const ticket = await TicketSchema.findById(ticketId);
  if (!ticket) {
    throw new Error("Not found");
  }
  return ticket;
};

const deleteTicketById = async (ticketId) => {
  const ticket = await getTicketById(ticketId);
  await ticket.remove();
  return ticket;
};

const updateTicketById = async (ticketId, updateParam) => {
  const ticket = await getTicketById(ticketId);
  Object.assign(ticket, updateParam);
  ticket.save();
  return ticket;
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicketById,
  updateTicketById,
};
