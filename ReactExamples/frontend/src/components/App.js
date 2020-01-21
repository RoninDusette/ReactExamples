import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import MyAccountInfo from "./views/MyAccountInfo.jsx";
import ShoppingList from "./views/ShoppingList.jsx";
import Wattup from "./views/Wattup.jsx";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/my-account-info">
                    <MyAccountInfo />
                </Route>
                <Route path="/shopping-list">
                    <ShoppingList />
                </Route>
                <Route path="/wattup">
                    <Wattup />
                </Route>
            </Switch>
        )
    }
}

export default hot(App);