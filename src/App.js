import CartPage from "./pages/CartPage";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:category">
          <ProductListPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
