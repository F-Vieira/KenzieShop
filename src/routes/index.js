import { Route, Switch } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { Products } from "../pages/Products";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
