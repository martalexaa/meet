import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });

        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <div>
                    <label htmlFor="city-input"><strong>Choose city: </strong></label>
                    <input
                        type="text"
                        id="city-input"
                        className="city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => { this.setState({ showSuggestions: true }) }}
                    />
                </div>
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li key="all" onClick={() => this.handleItemClicked("all")}>
                        <h4>See all cities</h4>
                    </li>
                </ul>
                <InfoAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default CitySearch;