import React from 'react'
import './App.css';
import HomePage from './containers/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from './containers/productListPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:slug' component={ProductList} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
