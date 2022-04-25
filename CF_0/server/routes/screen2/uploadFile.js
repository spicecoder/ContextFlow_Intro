const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const decompress = require("decompress");
const { exec } = require("child_process");
const path = require("path");
var mqtt = require('mqtt');

const client = mqtt.connect("ws://localhost:8888");


router.post("/", async (req, res) => {
  try {
    var counter = fs.readFileSync("counter.txt", "utf8");
    counter = parseInt(counter);
    const newpath = `Workcontainer/Workspace_${counter - 1}/`;
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
  try {
    var counter = fs.readFileSync("counter.txt", "utf8");
    counter = parseInt(counter);
    const newpath = `./Workcontainer/Workspace_${counter}`;
    counter = counter + 1;
    await fs.writeFileSync("counter.txt", counter.toString());
    const file = req.files.file;
    const filename = file.name;

    await file.mv(`Upload/${filename}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    await decompress(`Upload/${filename}`, newpath, {
      filter: (file) => path.extname(file.path) !== ".exe",
    }).then((files) => {
      return files;
    });

    fs.unlinkSync(`./Upload/${filename}`);
    console.log(`fs to unlinked:newpath ${filename}`);
   
    exec(`cd ${newpath}/${filename.split(".")[0]} ;docker build . ;`, (error, stdout, stderr) => {
    console.log(`slice: ${filename.split(".")[0]}`)
      //'newpath/${filename}'
      client.subscribe('presence', function (err) {
        if (!err) {
          client.publish('presence', 'work_space262 job done')
         
        }
      })
       console.log("in exec");
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      // res.send(`stdout: ${stdout}`);
       console.log("std out:" + stdout);
      console.log(`stderr: ${stderr}`);
    });
      
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  });
    res.send({
      msg: `${filename} extracted to Workspace_${counter - 1}`,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});
//var mqtt = require('mqtt')
//var client  = mqtt.connect('mqtt://test.mosquitto.org')
// const client = mqtt.connect("ws://localhost:8888");
// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello to  mqtt')
//       client.publish('presence', 'spread mqtt')
//     }
//   })
// })


module.exports = router;
