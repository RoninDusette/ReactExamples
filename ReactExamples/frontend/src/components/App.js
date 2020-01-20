import React, {Component} from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentPage: ''
        };
    }

    render() {
        return (
            <div>
                <h1>Loading: {this.loading}</h1>
            </div>
        )
    }
}

export default App;