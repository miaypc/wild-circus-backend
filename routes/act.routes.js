const express = require("express");
const router = express.Router();
const actController = require("../controllers/act.controller");

router.post("/", actController.createAct);
router.get("/", actController.getActs);
router.get("/:id", actController.getActById);
router.delete("/:id", actController.deleteActById);
router.patch("/:id", actController.updateActById);

module.exports = router;
