import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/server/';

export default [
  <Route path="/servers/create" component={Create} exact key="create" />,
  <Route path="/servers/edit/:id" component={Update} exact key="update" />,
  <Route path="/servers/show/:id" component={Show} exact key="show" />,
  <Route path="/servers/" component={List} exact strict key="list" />,
  <Route path="/servers/:page" component={List} exact strict key="page" />
];
