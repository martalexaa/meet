import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> componenent', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })

    test('an event element is collapsed by default', () => {
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })

    test('user sees a Details button, the name and the location of an event by default', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails).toHaveLength(1);
        expect(buttonDetails.text()).toBe('Show Details');

        const eventName = EventWrapper.find('h4.name');
        expect(eventName.text()).toBe(`${event.summary}`)
        expect(EventWrapper.find('h4.name')).toHaveLength(1);

        const eventLocation = EventWrapper.find('p.location');
        expect(eventLocation.text()).toBe(`${event.location}`)
        expect(EventWrapper.find('p.location')).toHaveLength(1);

        const eventStart = EventWrapper.find('p.event-start');
        expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
        expect(eventStart).toHaveLength(1);

    });

    test('user cannot see event details', () => {
        expect(EventWrapper.find('p.link')).toHaveLength(0);
        expect(EventWrapper.find('p.status')).toHaveLength(0);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
        expect(EventWrapper.find('p.creator')).toHaveLength(0);
        expect(EventWrapper.find('p.organizer')).toHaveLength(0);
        expect(EventWrapper.find('p.recurrence')).toHaveLength(0);
    })

    test('user can expand an event when they push the Show Details button', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails.text()).toBe('Show Details');
        buttonDetails.simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(false);
    })

    test('user can see the details of the upcoming event', () => {
        expect(EventWrapper.find('p.link')).toHaveLength(1);
        expect(EventWrapper.find('p.status')).toHaveLength(1);
        expect(EventWrapper.find('p.description')).toHaveLength(1);
        expect(EventWrapper.find('p.creator')).toHaveLength(1);
        expect(EventWrapper.find('p.organizer')).toHaveLength(1);
        expect(EventWrapper.find('p.recurrence')).toHaveLength(1);

    })

    test('user can collapse an event when he pushes the Hide Details button', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails.text()).toBe('Hide Details');
        buttonDetails.simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })

});