import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

//Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Product from './pages/Product';
import SubCategories from './pages/SubCategories';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    {/* Public routes */}
                    <Route exact path="/login" component={Login}/>

                    {/* Private routes */}
                    <Route exact path="/admin" component={Home}/>
                    <Route exact path="/admin/categories" component={Categories}/>
                    <Route exact path="/admin/products" component={Products}/>
                    <Route exact path="/admin/product/:id" component={Product}/>
                    <Route exact path="/admin/subcategories" component={SubCategories}/>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App;
