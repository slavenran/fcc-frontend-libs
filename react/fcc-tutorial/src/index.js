import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './pages/Test'
import CallbackProp from './pages/CallbackProp'
import Lifecycle from './pages/LifecycleComponents'
import EightBall from './pages/MagicEightBall';
import ConditionalRendering from './pages/ConditionalRendering';
import MapFilter from './pages/MapFilter';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/test" component={Test}/>
        <Route path="/callback" component={CallbackProp}/>
        <Route path="/lifecycle" component={Lifecycle}/>
        <Route path="/eightball" component={EightBall}/>
        <Route path="/rendering" component={ConditionalRendering}/>
        <Route path="/mapfilter" component={MapFilter}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
