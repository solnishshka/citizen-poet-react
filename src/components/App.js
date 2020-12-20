import './App.css';
import { Route } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import About from './About';
import Categories from './Categories';
import House from './House';
import Electro from './Electro';
import Repair from './Repair';

function App() {
  return (
    <div className="App">
      <div className="root">
        <Header />
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
        <Route path="/categories/house/electro">
          <Electro />
        </Route>
        <Route path="/categories/house/repair">
          <Repair />
        </Route>
      </div>
    </div>
  );
}

export default App;
