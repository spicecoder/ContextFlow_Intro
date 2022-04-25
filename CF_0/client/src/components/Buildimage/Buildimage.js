import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
//https://www.pluralsight.com/guides/display-multidimensional-array-data-in-react
//https://www.pluralsight.com/guides/return-variable-in-render-function-in-react

const Screen1 = ({ check }) => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const exexcuteFile = async () => {
    const res = await axios.post("http://localhost:9003/screen1", {
      data: data,
    });
    setResult(res.data);
  };

  return (
    <div className="screen-main-div">
      <h4 className="main-heading">Submit Dockerfile</h4>
      <div className="screen-input">
        <h4>Dockerfile Content :</h4>
        <TextField
          fullWidth
          id="fullWidth"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="screen-button">
        <Button variant="contained" onClick={() => exexcuteFile()}>
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

export default Screen1;
