import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer as form } from "redux-form";
import { Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from "connected-react-router";
import server from "./reducers/server/";
import serverRoutes from "./routes/server";
import website from "./reducers/website/";
import websiteRoutes from "./routes/website";
import legalRoutes from "./routes/legal";
import Welcome from "./Welcome";
import Layout from "./components/layout";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    server,
    website
    /* Add your reducers here */
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {websiteRoutes}
        {serverRoutes}
        {legalRoutes}
        <Route path="/info/" component={Welcome} exact strict key="info" />
        <Route
          render={() => (
            <Layout>
              <h1>Not Found</h1>
            </Layout>
          )}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
