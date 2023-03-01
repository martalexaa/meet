import React, { Component } from "react";


class Event extends Component {

  // the state object is initialized with isCollapsed set to true
  state = {
    isCollapsed: true
  }

  //when handleClick is called, it will toggle the isCollapsed property between true and false in the component's state

  handleClick = () => {
    this.setState(prevState => (
      { isCollapsed: !prevState.isCollapsed }
    ));
  }

  render() {
    const { event } = this.props
    const { isCollapsed } = this.state

    return (
      <div className='Event'>
        <h3 className='name'>{event.summary}</h3>
        <p className='location'>{event.location}</p>
        <p className='event-start'>
          {new Date(event.start.dateTime).toString()}
        </p>
        <button className="details-btn" onClick={this.handleClick}>{this.state.isCollapsed ? 'Show ' : 'Hide '}
          Details
        </button>
        {!isCollapsed && (
          <div className='details'>
            <p className="description">
              <strong>Description:</strong> {event.description}
            </p>
            <a
              className="link"
              href={event.htmlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    );
  }
}
export default Event;