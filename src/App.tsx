import React from 'react';
import GlobalStyle from "./utils/GloablStyle";
import RouterLink from "./router/router";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div >
        <Router>
            <RouterLink />
        </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
