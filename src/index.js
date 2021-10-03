import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getOrder  from './components/getorder';
import Payment from './components/Payment';
import ordersList from './components/ordersList';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

const Root = () => (
  <Router>
      <Switch>
          <Route exact path='/' component={App} />
          <Route path='/getorder' component={getOrder}/>
          <Route path='/payment' component={Payment} />
          <Route path='/orderslist' component={ordersList}/>
          
      </Switch>
  </Router>
);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pour pouvoir utiliser Redux Devtools 
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(<Root />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
