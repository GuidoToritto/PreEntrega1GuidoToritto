import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Contenido from './components/paginas/Contenido';
import Items from './components/paginas/Items';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
     </Router>
    </div>
  );
}

export default App;
