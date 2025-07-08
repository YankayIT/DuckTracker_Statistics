const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/text", (req, res) => {
  const data = fs.readFileSync("data.json", "utf-8");
  res.json(JSON.parse(data));
});

app.post("/api/text", (req, res) => {
  const { text } = req.body;
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  data.push({ id: Date.now(), text });
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Text saved" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
