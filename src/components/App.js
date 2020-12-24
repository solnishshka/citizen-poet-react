import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Categories from "./Categories";
import House from "./House";
import Electro from "./Electro";
import Repair from "./Repair";
import Mesto from "./Mesto";
import Success from "./Success";
import Cabinet from "./Cabinet";
import Yard from "./Yard";
import PageNotFound from "./PageNotFound";
import Road from "./Road";
import Park from "./Park";

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
          <Route exact path="/categories/house">
            <House />
          </Route>
          <Route exact path="/categories/yard">
            <Yard />
          </Route>
          <Route exact path="/categories/road">
            <Road />
          </Route>
          <Route exact path="/categories/park">
            <Park />
          </Route>
          <Route path="/categories/house/electro">
            <Electro />
          </Route>
          <Route path="/categories/house/repair">
            <Repair />
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
