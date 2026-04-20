import TodoItem from './TodoItem';

function TodoList({ tareas, onToggle }) {
  return (
    <div>
      {tareas.map((tarea) => (
        <TodoItem
          key={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          onToggle={() => onToggle(tarea.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;