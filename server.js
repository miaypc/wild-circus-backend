const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const ticketRoutes = require("./routes/ticket.routes");
const actRoutes = require("./routes/act.routes");

const connect = () => {
  return mongoose.connect("mongodb://localhost/circus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
app.use(cors());
app.use(express.json());
app.use("/booking", ticketRoutes);
app.use("/act", actRoutes);

connect();

app.listen(5000, () => {
  console.log("app is running on 5000");
});
