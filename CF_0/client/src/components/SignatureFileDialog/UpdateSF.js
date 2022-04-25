import { useEffect, useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function UpdateSF({
  showDialog,
  setShowDialog,
  currentData,
  dataStorage,
}) {
  const [data, setData] = useState("");

  const handleClose = () => {
    setShowDialog(false);
  };

  const UpdateSignaturedFile = async () => {
    for (let i in dataStorage) {
      var rp = dataStorage[i];
      if (Object.keys(rp)[0] === currentData) {
        const obj = {};
        obj[`${data}`] = "";
        dataStorage[i] = obj;
      }
    }
    setShowDialog(false);
    setData("");
  };

  useEffect(() => {
    setData(currentData);
  }, [currentData]);

  return (
    <div>
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogTitle>change signatured file</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="signatured file"
            type="email"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => UpdateSignaturedFile()}>
            confirm change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
