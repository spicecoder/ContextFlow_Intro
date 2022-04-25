import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
//https://www.pluralsight.com/guides/display-multidimensional-array-data-in-react
//https://www.pluralsight.com/guides/return-variable-in-render-function-in-react

const WorkspaceZipUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadZip = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    try {
      const res = await axios.post(
        "http://localhost:9003/upload/zip",
        formData
      );
      setResult(res.data.msg);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="screen-main-div">
      <h4 className="main-heading">Workspace Zip Upload</h4>
      <div className="screen-input">
        <h4>Upload Zip :</h4>
        <input type="file" onChange={handleFile} />
      </div>
      <div className="screen-button">
        <Button variant="contained" onClick={() => uploadZip()}>
          Upload
        </Button>
      </div>

      <div className="screen-input">
        <h4>Result :</h4>
        <TextField fullWidth id="fullWidth" value={result} />
      </div>
    </div>
  );
};

export default WorkspaceZipUpload;
