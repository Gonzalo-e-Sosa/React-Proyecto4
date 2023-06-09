import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tarea.jsx';


const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      localStorage.tareas = JSON.stringify(tareasActualizadas);
    }
  };
  
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.tareas = JSON.stringify(tareas);
  };
  
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    localStorage.tareas = JSON.stringify(tareasActualizadas);
  }
  
  window.onload = e => {
    if(localStorage.getItem('tareas') === null) {
      localStorage.tareas = JSON.stringify(tareas);
    }
    else {
      setTareas(JSON.parse(localStorage.tareas));
    }
  }

  return(
    <>
      <TareaFormulario onSubmit = {agregarTarea} />
      <div className = 'tareas-lista-contenedor'>
        {
          tareas.map(tarea =>
            <Tarea 
              key = {tarea.id}
              id = {tarea.id}
              texto = {tarea.texto}
              completada = {tarea.completada}
              completarTarea = {completarTarea}
              eliminarTarea = {eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;