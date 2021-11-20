import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Homework1 from "./homeworks/homework1";
function App() {
  return (
    <div className="App">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/js/homework1">Javascript Homework 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/js/homework2">Javascript Homework 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/js/homework3">Javascript Homework 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Router>
        <Switch>
          <Route path="/js/homework1">
            <Homework1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
