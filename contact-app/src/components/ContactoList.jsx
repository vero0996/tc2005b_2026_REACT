import ContactoCard from "./ContactoCard";

function ContactoList({ contactos, onEliminar }) {
  if (contactos.length === 0) {
    return <p className="empty">No hay contactos</p>;
  }

  return (
    <div className="lista-contactos">
      {contactos.map((c) => (
        <ContactoCard
          key={c.id}
          nombre={c.nombre}
          telefono={c.telefono}
          categoria={c.categoria}
          onEliminar={() => onEliminar(c.id)}
        />
      ))}
    </div>
  );
}

export default ContactoList;