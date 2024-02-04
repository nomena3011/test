const express = require("express");
const cors = require("cors");
const path = require("path");

let port = process.env.PORT || 3000;

let data = {
  nom: "Nomena",
  age: 24,
};

const app = express();
//definir le dossier public comme repertoire statique
app.use(express.static(path.join(__dirname, "frontend")));

app.use(express.json());
app.use(cors());

//-------------Evenement------------//

app.get("/", (req, res) => {
  //envoyer le fichier HTML manuellement
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/donnee", (req, res) => {
  console.log("Iny fa nisy nikitika!!");
  res.json(data);
});

//------------******-----------//
app.listen(port, () => {
  console.log(`Le serveur est demarrer sur le port ${port}`);
});
