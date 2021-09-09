const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

// serve the public directory as a static content here
app.use(express.static("public"));

/*let nimi = "fetch all locations";
app.get("/customers", (req, res) => {
  res.send(nimi);
});*/

// indentation is set to 2 spaces
var str = JSON.stringify({ id: 1, latitude: 60, longitude: 70 }, null, 3);

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/locations", (req, res) => {
  res.send(database);
});

app.get("/locations/:myId([0-9]+)", (req, res) => {
  let id = req.params.myId;
  for (let i = 0; i < database.length; i++) {
    if (database[i].id == id) {
      locations = database[i];
    }
  }
  if ((locations = !null)) {
    res.send(locations);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.get("/locations/:urlId([0-9]+)", (req, res) => {
  const urlId = Number(req.params.urlId);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
