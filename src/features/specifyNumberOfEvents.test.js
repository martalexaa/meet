import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user didn’t specify the number of events', () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see 32 events', () => {
            expect(AppWrapper.state('eventCount')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user opened the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specifies the number of events they want to see', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventNumber = { target: { value: 3 } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventNumber);
            expect(NumberOfEventsWrapper.state('number')).toBe(3);
        });

        then('the user should see the specified number of events', () => {
            expect(AppWrapper.state('eventCount')).toEqual(3);
        });
    });

});