const express = require("express")
const app = new express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/auth', authRouter);

app.listen(port,() => {
    console.log("Server is running on port 5000")
})