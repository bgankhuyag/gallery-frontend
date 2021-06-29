import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home'
import About from './views/about'
import Header from './layout/header'

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
