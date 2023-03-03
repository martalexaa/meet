import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        number: 32,
        infoText: ''
    }

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue });
        if (inputValue > 32) {
            this.setState({
                infoText: 'Select number from 1 to 32'
            });
        } else {
            return this.setState({
                infoText: ''
            });
        }
    };


    render() {
        return (
            <div className="NumberOfEvents">
                <div>
                    <label htmlFor="number-of-events"><strong>Number of events: </strong></label>
                    <input
                        id="number-of-events"
                        type="number"
                        className="number"
                        value={this.state.number}
                        onChange={
                            this.handleNumberChange
                        }
                    />
                </div>
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;