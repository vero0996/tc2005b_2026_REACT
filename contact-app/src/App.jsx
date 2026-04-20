import { useState } from "react";
import ContactoForm from "./components/ContactoForm";
import ContactoList from "./components/ContactoList";

function App() {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  const agregarContacto = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter((c) => c.id !== id));
  };

  const contactosFiltrados = contactos.filter((c) =>
    filtro === "Todos" ? true : c.categoria === filtro
  );

  return (
    <div className="app-container">
      <h1>Contactos</h1>

      <ContactoForm onAgregar={agregarContacto} />

      <div className="filtros">
        <button
          className={filtro === "Todos" ? "activo" : ""}
          onClick={() => setFiltro("Todos")}
        >
          Todos
        </button>
        <button
          className={filtro === "Trabajo" ? "activo" : ""}
          onClick={() => setFiltro("Trabajo")}
        >
          Trabajo
        </button>
        <button
          className={filtro === "Familia" ? "activo" : ""}
          onClick={() => setFiltro("Familia")}
        >
          Familia
        </button>
        <button
          className={filtro === "Amigo" ? "activo" : ""}
          onClick={() => setFiltro("Amigo")}
        >
          Amigo
        </button>
      </div>

      <ContactoList
        contactos={contactosFiltrados}
        onEliminar={eliminarContacto}
      />
    </div>
  );
}

export default App;