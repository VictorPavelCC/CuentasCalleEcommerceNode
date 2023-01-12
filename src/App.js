import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListDetalles from './components/containers/ItemListDetalles';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
