import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
