import express from "express";

const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to safis api",
  });
});

app.listen(PORT, () => {
  console.log(`Listeaning on http://localhost:${PORT}`);
});
