import * as React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
} from "@mui/material";

export default function UpdateSF({
  removeDialog,
  setRemoveDialog,
  currentData,
  dataStorage,
}) {
  const handleClose = () => {
    setRemoveDialog(false);
  };

  const DeleteSignatureFile = async () => {
    for (let i in dataStorage) {
      var ev = dataStorage[i];
      if (Object.keys(ev)[0] === currentData) {
        delete dataStorage[i];
      }
    }
    setRemoveDialog(false);
  };

  return (
    <div>
      <Dialog open={removeDialog} onClose={handleClose}>
        <DialogTitle>delete signature file</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="signatured file"
            type="email"
            fullWidth
            variant="standard"
            value={currentData}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => DeleteSignatureFile()}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
