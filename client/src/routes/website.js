import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/website/";

export default [
  <Route path="/" component={List} exact strict key="home" />,
  <Route path="/websites/create" component={Create} exact key="create" />,
  <Route path="/websites/edit/:id" component={Update} exact key="update" />,
  <Route path="/websites/show/:id" component={Show} exact key="show" />,
  <Route path="/websites/" component={List} exact strict key="list" />,
  <Route path="/websites/:page" component={List} exact strict key="page" />
];
