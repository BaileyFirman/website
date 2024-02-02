// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <div className="app-container">
        <span className="app-header">
          <h1 className="app-main-heading">bfirman.io</h1>
          <span className="five-colors-background" />
        </span>
        <div className="app-body">
          <h3 className="app-sub-heading-about">about</h3>
          <h3 className="app-sub-heading-blog">blog</h3>
          <h3
            className="app-sub-heading-projects"
            onClick={() => setShowProjects((x) => !x)}
          >
            projects
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
