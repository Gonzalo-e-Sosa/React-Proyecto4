import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import '../hojas-de-estilo/Tarea.css'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  const claseTarea = completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
  
  return(
    <div className = {claseTarea}> 
      <div 
        className = 'tarea-texto'
        onClick = {() => completarTarea(id)}>
          {texto}
      </div>
      <div 
        className = 'tarea-contenedor-iconos'
        onClick = {() => eliminarTarea(id)}
      >
        <FaTimesCircle className = 'tarea-icono-quitar'/>
      </div>
    </div>
  );
};

export default Tarea;