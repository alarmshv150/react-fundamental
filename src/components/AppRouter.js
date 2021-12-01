import { AppContext } from "../context";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

export const AppRouter = () => {
  const { isAuth, isLoading } =
    /* instead useContext(Context) everywhere in app*/ AppContext();
  console.log(isAuth);

  if (isLoading) return <Loader />;
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

