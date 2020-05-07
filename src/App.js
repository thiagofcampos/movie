import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import Routes from './routes';
import GlobalStyles from './styles/global'
import Header from './templates/header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;