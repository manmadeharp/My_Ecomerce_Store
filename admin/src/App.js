import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './containers/home'
import Signin from './containers/signin'
import Signup from './containers/signup'
import PrivateRoute from './components/HOC/privateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, isUserLoggedIn, getInitialData } from './actions'
import Products from './containers/products';
import Orders from './containers/orders';
import Category from './containers/category';
// import { getInitialData } from './actions/initialDataA';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
    // dispatch(getAllCategory())
    dispatch(getInitialData())
  }, [])
  return (

    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/category" exact component={Category} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
