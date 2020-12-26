import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Categories from "./Categories";
import Mesto from "./Mesto";
import Success from "./Success";
import Cabinet from "./Cabinet";
import PageNotFound from "./PageNotFound";
import Subcategories from "./Subcategories";
import { Switch, Route } from 'react-router-dom';
import Quotes from "./Quotes";
import Result from "./Result";


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
          <Route exact path="/categories/:name/:title">
            <Quotes />
          </Route>
          <Route exact path="/categories/:name/:title/mesto/:id" >
            <Mesto />
          </Route>
          <Route path="/categories/:name/:title/mesto/:id/success">
            <Success />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="/result">
            <Result />
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
