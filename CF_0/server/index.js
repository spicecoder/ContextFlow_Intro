const config = require("./config");
const Express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

const screen1Router = require("./routes/screen1/screen1");
const contextRouter = require("./routes/screen2/context");
const uploadFile = require("./routes/screen2/uploadFile");

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(Express.json());
app.use(fileupload());
app.use(Express.static("files"));

app.use("/screen1", screen1Router);
app.use("/context", contextRouter);
app.use("/upload", uploadFile);
app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
});
