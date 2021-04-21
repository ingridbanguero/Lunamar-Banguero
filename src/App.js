import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Este es un texto de ejemplo enviado por mi prop greeting"/>
    </div>
  );
}

export default App;
