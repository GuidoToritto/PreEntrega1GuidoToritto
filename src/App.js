import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Contenido from './components/paginas/Contenido';
import Items from './components/paginas/Items';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={ <Inicio/>}/>
      <Route path='Contenido' element={<Contenido/>}/>
      <Route path='Items' element ={<Items/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;