// import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import { Dashboard } from "./components/Dashboards";

// import Home from "./components/Home";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h2>Welcome! Global Interns</h2> */}
      <BrowserRouter>
        <Link style={{ margin: "10px" }} to="/home">
          Home
        </Link>
        <Link style={{ margin: "10px" }} to="/dashboard">
          Dashboard
        </Link>
        <Link style={{ margin: "10px" }} to="/aboutus">
          AboutUs
        </Link>

        <Switch>
          <Route path="/home"> {/* <Home /> */}</Route>
          <Route path="/aboutus">
            {" "}
            <AboutUs />
          </Route>
          <Route path="/dashboard">
            {" "}
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
