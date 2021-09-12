import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Product from './pages/Product';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Public routes */}
                <Route exact path="/login" component={Login}/>

                {/* Private routes */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/product/:id" component={Product}/>
            </Switch>
        </Router>
    )
}

export default App;
