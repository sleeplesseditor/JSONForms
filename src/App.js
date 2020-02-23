import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

import LazyLoader from './components/LazyLoader/LazyLoader';
const FformPage = React.lazy(() => import('./pages/FformPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(FformPage)} />
        </Switch>
    </Router>
  );
}

export default App;
