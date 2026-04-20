import { useState } from "react";

function ContactoForm({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [categoria, setCategoria] = useState("Amigo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    const nuevo = {
      id: Date.now(),
      nombre,
      telefono,
      categoria,
    };

    onAgregar(nuevo);

    setNombre("");
    setTelefono("");
    setCategoria("Amigo");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Trabajo">Trabajo</option>
        <option value="Familia">Familia</option>
        <option value="Amigo">Amigo</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContactoForm;