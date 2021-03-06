import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  showAddDialogForRp,
  setShowAddDialogForRp,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowAddDialogForRp(false);
  };
  const UpdateEnvironmentVariable = async (e) => {
    if (e.key === "Enter") {
      const obj = {};
      obj[`${data}`] = "";
      dataStorage.DS[0].d[1].FS[1].f[1].ES.push(obj);
      setShowAddDialogForRp(false);
      setData("");
    }
  };

  return (
    <div>
      <Dialog open={showAddDialogForRp} onClose={handleClose}>
        <DialogTitle>add runtime parameter name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameter name"
            type="email"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
            onKeyDown={UpdateEnvironmentVariable}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
