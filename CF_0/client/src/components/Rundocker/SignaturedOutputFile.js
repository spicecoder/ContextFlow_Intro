import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import UpdateSF from "../SignatureFileDialog/UpdateSF";
import DeleteSF from "../SignatureFileDialog/DeleteSF";
import AddSFValue from "../SignatureFileDialog/AddSFValue";
import AddSF from "../SignatureFileDialog/AddSF";
import ContextItemRow from "../reusable-components/ContextItemRow";

const SignaturedOutPutFiles = ({ dataStorage }) => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showValueDialog, setShowValueDialog] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [currentData, setCurrentData] = useState("");
  const [removeDialog, setRemoveDialog] = useState(false);

  return (
    <div className="screen-main-div">
      <UpdateSF
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        currentData={currentData}
        setCurrentData={setCurrentData}
        dataStorage={dataStorage.DS[0].d[1].FS[4].f[1].ES}
      />
      <DeleteSF
        removeDialog={removeDialog}
        setRemoveDialog={setRemoveDialog}
        currentData={currentData}
        dataStorage={dataStorage.DS[0].d[1].FS[4].f[1].ES}
      />

      <AddSFValue
        showValueDialog={showValueDialog}
        setShowValueDialog={setShowValueDialog}
        currentData={currentData}
        setCurrentData={setCurrentData}
        dataStorage={dataStorage.DS[0].d[1].FS[4].f[1].ES}
      />
      <AddSF
        dataStorage={dataStorage.DS[0].d[1].FS[4].f[1].ES}
        showAddDialog={showAddDialog}
        setShowAddDialog={setShowAddDialog}
      />
      <div className="list-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Signatured Output files :</h4>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setShowAddDialog(true)}
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {dataStorage.DS[0].d[1].FS[4].f[1].ES.map((data, i) => (
          <div key={i}>
            <ContextItemRow
              data={data}
              setShowDialogFor={setShowDialog}
              setCurrentData={setCurrentData}
              setRemoveDialogForData={setRemoveDialog}
              setShowValueDialogForData={setShowValueDialog}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignaturedOutPutFiles;
