import './App.css';
import stockArr from "./data.json"
import Nav from './components/Nav.js'

import About from './pages/About';
import Main from './pages/Main';
import Stock from './pages/Stock';
import Stocks from "./pages/Stocks";

import { Route } from 'react-router-dom';

function App() {
  const stockData = stockArr.map((elem, index) => {
    return(
      <Stocks {...elem} key={index}/>
    );
  });
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/stocks">
        {stockData}
      </Route>
      <Route path="/stocks/:symbol">
        <Stock />
      </Route>
      
    </div>
  );
}

export default App;
