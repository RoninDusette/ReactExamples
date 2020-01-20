import React, { Component } from "react";
import {Link} from "react-router-dom";


class Wattup extends Component {
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

export default Wattup;