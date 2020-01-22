import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div id="id_nav-bar" className="container-fluid my-0 px-0 nav-bar">
                <div className="row can-haz-navbehr">
                    <div className="col-xs-12 col-md-4 text-center">
                        <NavLink to="/my-account-info"
                                 className="nav-link"
                        >
                            My Account Info
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;