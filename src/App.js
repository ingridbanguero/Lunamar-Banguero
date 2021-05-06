import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const products = [
    {
        id: '1',
        title: 'Vela de vainilla',
        price: 18000,
        pictureUrl: 'https://i.imgur.com/76mfoLm.jpg',
        category: 'aromatizantes'
    },
    {
        id: '2',
        title: 'Vela de frutos rojos',
        price: 19000,
        pictureUrl: 'https://i.imgur.com/oMLnbl8.jpg',
        category: 'aromatizantes'
    },
    {
        id: '3',
        title: 'Vela de flor de loto',
        price: 23000,
        pictureUrl: 'https://i.imgur.com/71KZDu3.jpg',
        category: 'humectantes'
    },
    {
        id: '4',
        title: 'Vela de coco',
        price: 25000,
        pictureUrl: 'https://i.imgur.com/F66RZA5.jpg',
        category: 'humectantes'
    },
    {
        id: '5',
        title: 'Vela de arandano',
        price: 25000,
        pictureUrl: 'https://i.imgur.com/qG9vYjh.jpg',
        category: 'artesanales'
    },
    {
        id: '6',
        title: 'Vela de sandia',
        price: 18000,
        pictureUrl: 'https://i.imgur.com/df5VAzg.jpg',
        category: 'artesanales'
    },
  ]

  return (
    <BrowserRouter>
          <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/category/:id">
            <ItemListContainer products={products}/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer item={products}/>
          </Route>
          <Route path="/">
            <ItemListContainer products={products}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
