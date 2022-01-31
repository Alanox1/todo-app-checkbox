import './App.css';
import { useState } from 'react';
import AñadirTarea from './components/AñadirTarea';
import TodoList from './components/TodoList';
function App() {
  const [tareas,setTareas] = useState([]);

  const listItems = tareas.map((el,index) =>  <TodoList key={index} tarea={el}/>)
  
  return (
    <div className="App">
      <h1>TodoList - tachar y destachar</h1>
      <section id='contenedor'>
        <AñadirTarea tareas={tareas} setTareas={setTareas}/>
        <ul>{listItems}</ul>
      </section>
      
    </div>
  );
}

export default App;
