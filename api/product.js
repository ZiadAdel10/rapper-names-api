const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const path = require("path");
const router = express.Router();

app.use(cors());

const rappers = {
  "21 savage": {
    age: 30,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthOrigin: "London, England",
  },

  "chance the rapper": {
    age: 30,
    birthName: "Chancelor Johnathan Bennett",
    birthOrigin: "Chicago, Illinois",
  },

  unkown: {
    age: 0,
    birthName: "unkown",
    birthOrigin: "unkown",
  },
};

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/index.html"));
});

router.get("/api/:rapperName", (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unkown"]);
  }
});

module.exports = router;
