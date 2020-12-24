import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Categories from "./Categories";
import Problems from "./Problems";
import Mesto from "./Mesto";
import Success from "./Success";
import Cabinet from "./Cabinet";
import PageNotFound from "./PageNotFound";
import Subcategories from "./Subcategories";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="root">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/categories/:name">
            <Subcategories />
          </Route>
          <Route path="/categories/:name/:title">
            <Problems />
          </Route>
          <Route path="/mesto">
            <Mesto />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
