import './App.css';
import { Route } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import About from './About';

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
      </div>
    </div>
  );
}

export default App;
