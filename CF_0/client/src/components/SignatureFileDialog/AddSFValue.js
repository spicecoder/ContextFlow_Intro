import { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function AddSFValue({
  showValueDialog,
  setShowValueDialog,
  currentData,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowValueDialog(false);
  };

  useEffect(() => {
    if (Object.values(currentData)[0]) {
      setData(Object.values(currentData)[0]);
    } else {
      setData("");
    }
  }, [currentData]);

  const addValue = async (e) => {
    for (let i in dataStorage) {
      var rp = dataStorage[i];

      if (Object.keys(rp)[0] === Object.keys(currentData)[0]) {
        const obj = {};
        obj[`${Object.keys(rp)[0]}`] = data;
        dataStorage[i] = obj;
      }
    }
    setShowValueDialog(false);
  };

  return (
    <div>
      <Dialog open={showValueDialog} onClose={handleClose}>
        <DialogTitle>add signatured file value</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameter"
            type="text"
            fullWidth
            variant="standard"
            value={Object.keys(currentData)[0]}
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            label="signatured file"
            type="text"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => addValue()}>
            confirm change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
