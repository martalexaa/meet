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

    return <div className='event'>
      <h4 className='name'>{event.summary}</h4>
      <p className='location'>{event.location}</p>
      <p className='event-start'>
        {new Date(event.start.dateTime).toString()}
      </p>
      <button className="details" onClick={this.handleClick}>{this.state.isCollapsed ? 'Show ' : 'Hide '}
        Details
      </button>
      {!isCollapsed &&
        <div className='toggle'>
          <p className='link'>{event.htmlLink}</p>
          <p className='status'>{event.status}</p>
          <p className='description'>{event.description}</p>
          <p className='creator'>{event.creator}</p>
          <p className='organizer'>{event.organizer}</p>
          <p className='recurrence'>{event.recurrence}</p>
        </div>
      }
    </div>;
  }
}
export default Event;