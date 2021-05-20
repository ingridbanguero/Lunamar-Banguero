import './App.css';
import { CartProvider } from './components/Context/cartContext'
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
            <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/category/:id">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/">
              <ItemListContainer/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
