const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const events = req.body.events;
  if (events && events.length > 0) {
    const userId = events[0].source.userId;
    const msg = events[0].message.text;
    console.log("📌 userId:", userId);
    console.log("💬 message:", msg);
  }
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("LINE Webhook พร้อมใช้งานแล้วค่ะ 🎉");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
