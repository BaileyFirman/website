import { useState } from "react";
import "./App.css";

function App() {
  const [_, setShowProjects] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-main-heading">bfirman.io</h1>
          {/* <span className="five-colors-background" /> */}
        </div>
        <div className="app-body">
          <h3 className="app-sub-heading-about">about</h3>
          <h3 className="app-sub-heading-blog">blog</h3>
          <h3
            className="app-sub-heading-projects"
            onClick={() => setShowProjects((x) => !x)}
          >
            projects
          </h3>
          <h3 className="app-sub-heading-extras">extras</h3>
          <h3 className="app-sub-heading-github">github</h3>
        </div>
      </div>
    </>
  );
}

export default App;
