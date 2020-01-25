import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./stores/store";
import Main from "./pages/index"
import Detail from "./pages/detail"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Main} />
        <Route path="/detail" component={Detail} />
      </Router>
    </Provider>
  );
}

export default App;
