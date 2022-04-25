const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const unzipper = require("unzipper");
const zlib = require("zlib");
const decompress = require("decompress");
const path = require("path");

router.post("/", async (req, res) => {
  try {
    const newpath = "Workcontainer/Workspace/";

    const file = req.files.file;
    const filename = file.name;

    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        console.log(err);
      }
      res.send({ path: `${newpath}${filename}` });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/zip", async (req, res) => {
  var serverdir = process.cwd('./../../'); 
  console.log("serverdir:" + serverdir );
  try {
    var counter = fs.readFileSync("counter.txt", "utf8");
    counter = parseInt(counter);
    const newpath = `./Workcontainer/Workspace_${counter}`;

    counter = counter + 1;
    await fs.writeFileSync("counter.txt", counter.toString());
    const file = req.files.file;
    const filename = file.name;

    await file.mv(`${serverdir}/Upload/${filename}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
    fs.mkdirSync(newpath);
   
    const file_details = await decompress(`${serverdir}/Upload/${filename}`, "dist", {
      filter: (file) => path.extname(file.path) !== ".exe",
    }).then((files) => {
      return files;
    });
    console.log("decompressed");
    fs.writeFileSync(
      `${newpath}/${file_details[0].path}`,
      file_details[0].data
    );
    fs.unlinkSync(`${serverdir}/Upload/${filename}`);
    res.send({ msg: "extracted zip file" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
