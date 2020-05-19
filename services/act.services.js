const ActSchema = require("../models/act.model");

const createAct = async (reqBody) => {
  const act = await ActSchema.create(reqBody);
  return act;
};

const getActs = async () => {
  const acts = await ActSchema.find();
  return acts;
};

const getActById = async (actId) => {
  const act = await ActSchema.findById(actId);
  if (!act) {
    throw new Error("Not found");
  }
  return act;
};

const deleteActById = async (actId) => {
  const act = await getActById(actId);
  await act.remove();
  return act;
};

const updateActById = async (actId, updateParam) => {
  const act = await getActById(actId);
  Object.assign(act, updateParam);
  act.save();
  return act;
};

module.exports = {
  createAct,
  getActs,
  getActById,
  deleteActById,
  updateActById,
};
