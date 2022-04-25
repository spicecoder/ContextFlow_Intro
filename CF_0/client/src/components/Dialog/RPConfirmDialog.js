import * as React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
} from "@mui/material";

export default function FormDialog({
  removeDialogForRp,
  setRemoveDialogForRp,
  currentRp,
  dataStorage,
}) {
  const deleteEntity = async () => {
    for (let i in dataStorage.DS[0].d[1].FS[1].f[1].ES) {
      var ev = dataStorage.DS[0].d[1].FS[1].f[1].ES[i];
      if (Object.keys(ev)[0] === currentRp) {
        delete dataStorage.DS[0].d[1].FS[1].f[1].ES[i];
      }
    }

    setRemoveDialogForRp(false);
  };

  const handleClose = () => {
    setRemoveDialogForRp(false);
  };

  return (
    <div>
      <Dialog open={removeDialogForRp} onClose={handleClose}>
        <DialogTitle>delete runtime parameter</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameter"
            type="email"
            fullWidth
            variant="standard"
            value={currentRp}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteEntity()}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
