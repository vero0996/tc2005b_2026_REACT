function TodoItem({ texto, completada, onToggle }) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg mb-2">
      <input
        type="checkbox"
        checked={completada}
        onChange={onToggle}
        className="w-4 h-4"
      />
      <span className={completada ? 'line-through text-gray-400' : ''}>
        {texto}
      </span>
    </div>
  );
}

export default TodoItem;