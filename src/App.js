import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

import LazyLoader from './components/LazyLoader/LazyLoader';
const JSONFormEnginePage = React.lazy(() => import('./pages/JSONFormEnginePage'));
const JSONSchemaFormPage = React.lazy(() => import('./pages/JSONSchemaFormPage'));
const JSONFormIOPage = React.lazy(() => import('./pages/JSONFormIOPage'));
const FformPage = React.lazy(() => import('./pages/FformPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(JSONFormEnginePage)} />
          <Route exact path="/json-schema-form" component={LazyLoader(JSONSchemaFormPage)} />
          <Route exact path="/json-form-io" component={LazyLoader(JSONFormIOPage)} />
          <Route exact path="/fform" component={LazyLoader(FformPage)} />
        </Switch>
    </Router>
  );
}

export default App;
