import React, {Component} from "react";


class MyAccountInfo extends Component {

    constructor (props) {
        super(props);
        this.state = {
            baseUrl: 'http://127.0.0.1:8000',
            endpoint: '/account/1/',
            accountInfo: []
        };
    }

    async handleGetAccountInfo () {
        const response = await fetch(this.state.baseUrl + this.state.endpoint);
        const json = await response.json();
        await this.setState({
            accountInfo: json
        });
    }

    componentDidMount () {
        this.handleGetAccountInfo();
    }

    render() {
        return(
            <div>
                <h1>My Account Info</h1>
                <br/>
                <ul>
                    <li>
                        First name: {this.state.accountInfo.first_name}
                    </li>
                    <li>
                        Last name: {this.state.accountInfo.last_name}
                    </li>
                    <li>
                        Email: {this.state.accountInfo.email_address}
                    </li>
                    <li>
                        Daily driver: {this.state.accountInfo.daily_driver}
                    </li>
                    <li>
                        Gender: {this.state.accountInfo.gender}
                    </li>
                </ul>
            </div>
        )
    }
}

export default MyAccountInfo;