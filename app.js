import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './src/containers/invite_container';
import store from './src/store/store';
import './src/styles/main.scss';


const main = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
);

ReactDom.render(main,
  document.getElementById('container'));