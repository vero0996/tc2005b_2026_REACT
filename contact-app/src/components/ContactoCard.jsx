function ContactoCard({ nombre, telefono, categoria, onEliminar }) {

  const obtenerIniciales = (nombre) => {
    const partes = nombre.split(" ");
    if (partes.length === 1) return partes[0][0].toUpperCase();
    return (partes[0][0] + partes[1][0]).toUpperCase();
  };

  const generarColorPastel = (texto) => {
    let hash = 0;

    for (let i = 0; i < texto.length; i++) {
      hash = texto.charCodeAt(i) + ((hash << 5) - hash);
    }

    const coloresPastel = [
      "#A8D8EA", // azul pastel
      "#FFB7B2", // rosa
      "#FFDAC1", // durazno
      "#E2F0CB", // verde suave
      "#B5EAD7", // aqua
      "#C7CEEA", // lila
    ];

  return coloresPastel[Math.abs(hash) % coloresPastel.length];
};

  const colorAvatar = generarColorPastel(nombre);
  const colorCategoria = {
    Trabajo: "#0a84ff",
    Familia: "#30d158",
    Amigo: "#ff9f0a",
  };

  return (
    <div className="contacto">
      <div className="left">
        <div
          className="avatar"
          style={{ backgroundColor: colorAvatar }}
        >
          {obtenerIniciales(nombre)}
        </div>

        <div className="info">
          <h4>{nombre}</h4>
          <p>{telefono}</p>

          <span
            className="categoria"
            style={{ color: colorCategoria[categoria] }}
          >
            {categoria}
          </span>
        </div>
      </div>

      <button className="delete-btn" onClick={onEliminar}>
        ✕
      </button>
    </div>
  );
}

export default ContactoCard;