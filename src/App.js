import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Lista de productos"/>
      <ItemCount stock={5} initial={0}/>
    </div>
  );
}

export default App;
