import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

import LazyLoader from './components/LazyLoader/LazyLoader';
const JSONFormEnginePage = React.lazy(() => import('./pages/JSONFormEnginePage'));
const JSONSchemaFormPage = React.lazy(() => import('./pages/JSONSchemaFormPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(JSONFormEnginePage)} />
          <Route exact path="/json-schema-form" component={LazyLoader(JSONSchemaFormPage)} />
        </Switch>
    </Router>
  );
}

export default App;
