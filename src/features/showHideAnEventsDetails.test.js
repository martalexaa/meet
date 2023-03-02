//BDD acceptance tests
//step definitions: connect each piece of the Gherkin-based scenario to the actual code that tests each of the steps

import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given(`the user didn’t expand an event to see its details`, () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the event element should be collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user opened the app', () => {
            AppWrapper = mount(<App />);
        });

        when('the user expands an event to see its details', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event details should be displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user expanded an event to see its details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details')).toHaveLength(1);
        });

        when('the user collapses an event to hide its details', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event details should be no longer visible', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details')).toHaveLength(0);
        });
    });

});