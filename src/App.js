import './App.css';
import Logo from './componentes/Logo.jsx';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';

function App() {
  
  return (
    <div className = 'App'>
      <Logo nombre = 'León' />
      <div className = 'contenedor-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
