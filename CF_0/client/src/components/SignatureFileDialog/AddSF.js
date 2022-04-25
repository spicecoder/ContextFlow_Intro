import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddSF({
  showAddDialog,
  setShowAddDialog,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowAddDialog(false);
  };
  const UpdateSignaturedFile = async (e) => {
    if (e.key === "Enter") {
      const obj = {};
      obj[`${data}`] = "";
      dataStorage.push(obj);
      setShowAddDialog(false);
      setData("");
    }
  };

  return (
    <div>
      <Dialog open={showAddDialog} onClose={handleClose}>
        <DialogTitle>add signatured file</DialogTitle>
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
            onKeyDown={UpdateSignaturedFile}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
