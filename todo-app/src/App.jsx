import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Hacer la practica', completada: false },
  ]);

  function agregarTarea(texto) {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  }

  function toggleTarea(id) {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-6">Mi lista de tareas</h1>
      <TodoForm onAgregar= {agregarTarea} />
      <TodoList tareas={tareas} onToggle={toggleTarea} />
    </div>
  );
}

export default App;