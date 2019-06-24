/**
 * Test file for Blocking Actions
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2019 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as blockingActions from '../BlockingActions';
import {
	UPDATE_BLOCKING_DATA,
	UPDATE_BLOCK_ALL_TRACKERS,
	UPDATE_CATEGORIES,
	UPDATE_CATEGORY_BLOCKED,
	UPDATE_TRACKER_BLOCKED,
	UPDATE_TRACKER_TRUST_RESTRICT,
	TOGGLE_EXPAND_ALL
} from '../../constants/constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('app/panel/actions/BlockingActions.js', () => {
	test('updateBlockingData should resolve', () => {
		const initialState = {};
		const store = mockStore(initialState);

		const data = {
			test: 'test-data'
		};
		const expectedPayload = { data, type: UPDATE_BLOCKING_DATA };
		store.dispatch(blockingActions.updateBlockingData(data));

		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});


	test('updateBlockAllTrackers should resolve', () => {
		const initialState = {};
		const store = mockStore(initialState);

		const data = {
			test: 'test-data'
		};
		const expectedPayload = { data, type: UPDATE_BLOCK_ALL_TRACKERS };
		store.dispatch(blockingActions.updateBlockAllTrackers(data));

		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});

	test('updateCategories should resolve', () => {
		const initialState = {};
		const store = mockStore(initialState);

		const data = {
			test: 'test-data'
		};
		const expectedPayload = { data, type: UPDATE_CATEGORIES };
		store.dispatch(blockingActions.updateCategories(data));

		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});


	test('updateCategoryBlocked should resolve', () => {
		const initialState = {};
		const store = mockStore(initialState);

		const data = {
			test: 'test-data'
		};
		const expectedPayload = { data, type: UPDATE_CATEGORY_BLOCKED };
		store.dispatch(blockingActions.updateCategoryBlocked(data));

		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});

	test('updateTrackerBlocked should resolve', () => {
		const paused_blocking = 'test-data';
		const sitePolicy = 'test-site';
		const store = mockStore({
			summary: {
				paused_blocking,
				sitePolicy
			}
		});
		const data = { test: 'test-data' };
		const expectedPayload = {
			data,
			type: UPDATE_TRACKER_BLOCKED,
			paused_blocking,
			sitePolicy
		};

		store.dispatch(blockingActions.updateTrackerBlocked(data));
		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});

	test('updateTrackerTrustRestrict should resolve', () => {
		const pageHost = 'test-data';
		const store = mockStore({
			summary: {
				pageHost
			}
		});
		const data = { test: 'test-data' };
		const expectedPayload = {
			data,
			type: UPDATE_TRACKER_TRUST_RESTRICT,
			pageHost
		};

		store.dispatch(blockingActions.updateTrackerTrustRestrict(data));
		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});

	test('toggleExpandAll should resolve', () => {
		const initialState = {};
		const store = mockStore(initialState);
		const data = {
			test: 'test-data'
		};

		const expectedPayload = { data, type: TOGGLE_EXPAND_ALL };
		store.dispatch(blockingActions.toggleExpandAll(data));

		const actions = store.getActions();
		expect(actions).toEqual([expectedPayload]);
	});
});