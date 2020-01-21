import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/my-account-info">My Account Info</Link></li>
                    <li><Link to="/shopping-list">Shopping List</Link></li>
                    <li><Link to="/wattup">Wattup</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;