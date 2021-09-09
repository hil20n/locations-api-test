const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

// serve the public directory as a static content here
app.use(express.static("public"));

/*let nimi = "fetch all locations";
app.get("/customers", (req, res) => {
  res.send(nimi);
});*/

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/customers", (req, res) => {
  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
