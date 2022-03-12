import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Comments from "./Comments";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/Comments" exact component={Comments} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
