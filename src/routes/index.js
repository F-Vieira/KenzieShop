import { Route, Switch } from "react-router-dom";
import { Products } from "../pages/Products";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
    </Switch>
  );
};
