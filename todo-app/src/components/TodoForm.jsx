import { useState } from 'react';

function TodoForm({ onAgregar }) {

  const [texto, setTexto] = useState('');

  function handleSubmit(e) {
    e.preventDefault();         // evita que la página se recargue
    if (!texto.trim()) return;  // no agregar si el input está vacío
    onAgregar(texto);
    setTexto('');               // limpiar el input después de agregar
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea..."
        className="flex-1 border rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;