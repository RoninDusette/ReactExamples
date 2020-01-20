import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import MyAccountInfo from "./views/MyAccountInfo.jsx";
import ShoppingList from "./views/ShoppingList.jsx";
import Wattup from "./views/Wattup.jsx";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/my-account-info" component={MyAccountInfo} />
                <Route path="/shopping-list" component={ShoppingList} />
                <Route path="/wattup" component={Wattup} />
            </Switch>
        )
    }
}

export default hot(App);