import React, {Component} from "react";


class MyAccountInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'http://127.0.0.1:8000',
            endpoint: '/account/1/',
            accountInfo: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateAccount = this.handleUpdateAccount.bind(this);
    }

    async handleGetAccountInfo() {
        const response = await fetch(
            this.state.baseUrl + this.state.endpoint
        );
        const json = await response.json();
        await this.setState({
            accountInfo: json
        });
    }

    async handleUpdateAccount () {
        const self = this;
        const settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'first_name': self.state.accountInfo.first_name,
                'last_name': self.state.accountInfo.last_name,
                'email_address': self.state.accountInfo.email_address,
                'daily_driver': self.state.accountInfo.daily_driver
            })
        };
        const response = await fetch(this.state.baseUrl + this.state.endpoint, settings);
        const json = await response.json();
        console.log(json.items);
        this.handleGetAccountInfo();
    }

    handleChange(event) {
        this.setState({
            accountInfo: {
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        this.handleGetAccountInfo();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row title-wrapper">
                        <div className="col-12 text-center">
                            <h1>My Account</h1>
                        </div>
                    </div>
                </div>

                <div className="account-form-wrapper">
                    <div className="container">
                        <form action="">
                            <div className="row d-flex justify-content-center h-100">
                                <div className="col-xs-12 col-md-6 form-group">
                                    <label htmlFor="id_first-name">
                                        First name:
                                    </label>
                                    <input className="form-control form-control-lg"
                                           type="text"
                                           id="id_first-name"
                                           name="first_name"
                                           value={this.state.accountInfo.first_name}
                                           onChange={this.handleChange}
                                           placeholder={this.state.accountInfo.first_name}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6 form-group">
                                    <label htmlFor="id_last-name">
                                        Last name:
                                    </label>
                                    <input className="form-control form-control-lg"
                                           type="text"
                                           id="id_last-name"
                                           name="last_name"
                                           value={this.state.accountInfo.last_name}
                                           onChange={this.handleChange}
                                           placeholder={this.state.accountInfo.last_name}
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xs-12 col-md-6 form-group">
                                    <label htmlFor="id_email-address">
                                        Email:
                                    </label>
                                    <input className="form-control form-control-lg"
                                           type="email"
                                           id="id_email-address"
                                           name="email_address"
                                           value={this.state.accountInfo.email_address}
                                           onChange={this.handleChange}
                                           placeholder={this.state.accountInfo.email_address}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6 form-group">
                                    <label htmlFor="id_daily-driver">
                                        Daily Driver:
                                    </label>
                                    <input className="form-control form-control-lg"
                                           type="text"
                                           id="id_daily-driver"
                                           name="daily_driver"
                                           value={this.state.accountInfo.daily_driver}
                                           onChange={this.handleChange}
                                           placeholder={this.state.accountInfo.daily_driver}
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xs-12 col-md-6 text-center">
                                    <button className="btn btn-success" type="button" name="update-button" onClick={this.handleUpdateAccount}>UPDATE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccountInfo;