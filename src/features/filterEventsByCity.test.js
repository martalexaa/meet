//step definitions: connect each piece of the Gherkin-based scenario to the actual code that tests each of the steps

import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn’t searched for any city', () => {

        });
        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see the list of upcoming events.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event').hostNodes()).toHaveLength(mockData.length);
        });
    });

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let CitySearchWrapper;
        let locations = extractLocations(mockData);
        given('the main page is open', () => {
            CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => { }} />);
        });

        when('the user starts typing in the city textbox', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        given('user was typing “Berlin” in the city textbox', () => {

        });

        and('the list of suggested cities is showing', () => {

        });

        when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {

        });

        then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {

        });

        and('the user should receive a list of upcoming events in that city', () => {

        });
    });
});