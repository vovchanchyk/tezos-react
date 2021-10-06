import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../routes/config";

const Main = () => {
  console.log(routes);

  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to={routes[0].path} />
        </Route>
        {routes.map((route) => (
          <Route
            path={route.path}
            exact
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </div>
  );
};

export { Main };
