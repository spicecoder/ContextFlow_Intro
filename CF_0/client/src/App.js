import "./App.css";
import Buildimage from "./components/Buildimage/Buildimage.js";
import Rundocker from "./components/Rundocker/Rundocker.js";
import NavBar from "./components/navbar";
import WorkspaceZipUpload from "./components/WorkspaceZipUpload/WorkSpaceZipUpload";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  var dataStorage = {
    DS: [
      {
        d: [
          "Docker Image",
          {
            FS: [
              {
                f: [
                  "Docker Run",
                  {
                    ES: [
                      {
                        command: "Docker run docker_demo",
                      },
                    ],
                  },
                ],
              },
              {
                f: [
                  "Runtime parameters",
                  {
                    ES: [],
                  },
                ],
              },
              {
                f: [
                  "Environment variables",
                  {
                    ES: [],
                  },
                ],
              },
              {
                f: [
                  "Signatured inputfiles",
                  {
                    ES: [],
                  },
                ],
              },
              {
                f: [
                  "Signatured outputfiles",
                  {
                    ES: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/buildimage" component={Buildimage} />
          <Route exact path="/zip upload" component={WorkspaceZipUpload} />
          <Route
            exact
            path="/rundocker"
            render={() => <Rundocker dataStorage={dataStorage} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
