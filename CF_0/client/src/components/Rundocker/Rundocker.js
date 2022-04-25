import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import RuntimeParameter from "./RuntimeParameter";
import EnvironmentVariable from "./EnvironmentVariable";
import SignaturedInputFiles from "./SignaturedInputFile";
import SignaturedOutPutFiles from "./SignaturedOutputFile";

const Rundocker = ({ dataStorage }) => {
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:9003/context", dataStorage);
    setResult(res.data);
  };

  return (
    <div className="screen-main-div">
      <h4 className="main-heading">Screen 2</h4>
      <div className="screen-input">
        <h4>Docker Run :</h4>

        <TextField
          fullWidth
          id="fullWidth"
          value={"Docker run docker_demo"}
          disabled
        />
      </div>
      <RuntimeParameter dataStorage={dataStorage} />
      <EnvironmentVariable dataStorage={dataStorage} />
      <SignaturedInputFiles dataStorage={dataStorage} />
      <SignaturedOutPutFiles dataStorage={dataStorage} />

      <div className="screen-button">
        <Button variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </div>

      <div className="screen-input">
        <h4>Result :</h4>
        <TextField fullWidth id="fullWidth" value={result} />
      </div>
    </div>
  );
};

export default Rundocker;
