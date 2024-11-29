const express = require("express");
const pool = require("./db");
const port = 3000;

const app = express();
app.use(express.json());

app.get("/", async (_req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools");

    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;

  try {
    await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
      name,
      location,
    ]);

    res.status(200).send({ message: "School added successfully!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/setup", async (_req, res) => {
  try {
    await pool.query(
      "CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address  VARCHAR(100))"
    );
    res.status(200).send({ message: "School created table!" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
