const actService = require("../services/act.services");

const createAct = async (req, res, next) => {
  try {
    const act = await actService.createAct({
      name: req.body.name,
      description: req.body.description,
      start: req.body.start,
      end: req.body.end,
    });
    res.status(200).json({ result: act });
  } catch (err) {
    next(err);
  }
};

const getActs = async (req, res, next) => {
  try {
    const acts = await actService.getActs();
    res.status(200).json({ result: acts });
  } catch (err) {
    next(err);
  }
};

const getActById = async (req, res, next) => {
  try {
    const act = await actService.getActById(req.params.id);
    res.status(200).json({ result: act });
  } catch (err) {
    next(err);
  }
};

const deleteActById = async (req, res, next) => {
  try {
    const act = await actService.deleteActById(req.params.id);
    res.status(200).json({ result: "deleted", deleteActById: act });
  } catch (err) {
    next(err);
  }
};

const updateActById = async (req, res, next) => {
  try {
    const act = await actService.updateActById(req.params.id, req.body);
    res.status(200).json({ result: "updated", updateActById: act });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAct,
  getActs,
  getActById,
  deleteActById,
  updateActById,
};
