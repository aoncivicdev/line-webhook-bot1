app.post("/webhook", (req, res) => {
  const events = req.body.events;
  if (events && events.length > 0) {
    const userId = events[0].source.userId;
    const message = events[0].message?.text;
    console.log("📌 userId:", userId);
    console.log("💬 message:", message);
  }
  res.sendStatus(200); // สำคัญมาก
});
