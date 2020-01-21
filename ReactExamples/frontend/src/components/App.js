import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './views/Nav.jsx';
import Home from './views/Home.jsx';
import MyAccountInfo from './views/MyAccountInfo.jsx';
import ShoppingList from './views/ShoppingList.jsx';
import Wattup from './views/Wattup.jsx';


class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                 <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/my-account-info" component={MyAccountInfo} />
                     <Route path="/shopping-list" component={ShoppingList} />
                     <Route path="/wattup" component={Wattup} />
                 </Switch>
            </Router>
        )
    }
}

export default App;