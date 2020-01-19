import React from "react";
import Classroom from "./Components/Classroom";
import StartClass from "./Components/StartClass";
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./Reducers/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0277bd"
    },
    secondary: {
      main: "#0086da"
    }
  }
});

const store = createStore(appReducer);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router basename="virtual-classroom">
          <Route path="/" component={StartClass} />
          <Route path="/class" component={Classroom}></Route>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
