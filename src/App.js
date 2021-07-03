import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Gallery from './views/gallery'
import Layout from './layout/layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
