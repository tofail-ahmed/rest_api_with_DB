const app = require("./app");
const config=require('./config/config.js')

require("dotenv").config();

// const port = process.env.PORT || 2023;
const port=config.app.port

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

