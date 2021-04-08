import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

import GlobalStyles from './styles/GlobalStyles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonName" exact component={Pokemon} />
      </Switch>

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
