import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Routes from 'routes';
import rootReducer from 'reducers';

const store = createStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
    console.log(store.getState());
});

const appProvider = (
    <Provider store={store}>
        <Routes history={history} />
    </Provider>
);


ReactDOM.render(appProvider, document.getElementById('app'));
