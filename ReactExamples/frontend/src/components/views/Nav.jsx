import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul className="list-unstyled list-inline can-haz-navbehr">
                    <li>
                        <NavLink to="/my-account-info"
                                 className="nav-link"
                        >
                            My Account Info
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping-list"
                                 className="nav-link"
                        >
                            Shopping List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wattup"
                                 className="nav-link"
                        >
                            Wattup
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;