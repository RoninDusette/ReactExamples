import React from "react";


class Wattup extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            baseUrl: 'http://127.0.0.1:8000',
            endpoint: '/contact/',
            latestMessages: [],
            inputFields: {
                full_name: '',
                email: '',
                subject: '',
                message: '',
                date_sent: ''
            }
        };
    }

    async getLatestMessages () {
        const response = await fetch(this.state.baseUrl + this.state.endpoint);
        const json = await response.json();
        await this.setState({
            latestMessages: json
        });
    }

    async handleSendMessage () {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'full_name': this.state.full_name,
                'email': this.state.email,
                'subject': this.state.subject,
                'message': this.state.message,
                'date_sent': this.state.date_sent
            })
        };
        const response = await fetch(this.state.baseUrl + this.state.endpoint, settings);
        const json = await response.json();
        console.log(json.items);
        this.getLatestMessages()
    }

    componentDidMount () {
        this.getLatestMessages();
    }

    render() {
        return(
            <div>
                <h1>Contact</h1>
            </div>
        )
    }
}

export default Wattup;