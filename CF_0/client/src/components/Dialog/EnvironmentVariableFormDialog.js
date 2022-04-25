import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions, Button } from "@mui/material";

export default function FormDialog({
  showDialogForEv,
  setShowDialogForEv,
  currentEv,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowDialogForEv(false);
  };
  const ChangeEnvironmentVariable = () => {
    for (let i in dataStorage.DS[0].d[1].FS[2].f[1].ES) {
      var ev = dataStorage.DS[0].d[1].FS[2].f[1].ES[i];
      if (Object.keys(ev)[0] === currentEv) {
        const obj = {};
        obj[`${data}`] = "";
        dataStorage.DS[0].d[1].FS[2].f[1].ES[i] = obj;
      }
    }
    setShowDialogForEv(false);
    setData("");
  };

  useEffect(() => {
    setData(currentEv);
  }, [currentEv]);

  return (
    <div>
      <Dialog open={showDialogForEv} onClose={handleClose}>
        <DialogTitle>change environment variable name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="environment variable name"
            type="email"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => ChangeEnvironmentVariable()}>
            confirm change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
