const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const { exec } = require("child_process");

router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const context = {};
    context.domain = "docker_image";
    context.flow = "docker_file";
    context.context_entity = [{ "docker file content": data }];

    fs.writeFileSync("dfc_db.txt", JSON.stringify(context), (err) => {
      if (err) console.log(err);
    });
   console.log("data received:" + data);
    exec(data, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log("ls out:" + stdout);
      /*
      LF (character : \n, Unicode : U+000A, ASCII : 10, hex : 0x0a)
      text.replace(/blue/g, "red");
      */

      res.send( stdout.replace("/cr","*"));
      console.log(`stderr: ${stderr}`);
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
