const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unkown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
