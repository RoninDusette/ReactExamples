import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class MyAccountInfo extends Component {
    render() {
        return(
            <div>
                <Link to="/my-account-info">My Account Info</Link>
                <Link to="/shopping-list">Shopping List</Link>
                <Link to="/wattup">Wattup</Link>
                <h1>My Account Info</h1>
            </div>
        )
    }
}