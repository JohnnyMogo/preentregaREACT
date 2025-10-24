import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Servicios() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68fa786cef8b2e621e8015d3.mockapi.io/actividades")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setActividades(datos);
        setCargando(false);
      })
      .catch((error) => {
        {
          console.error("Error!,", error);
        }
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  return (
    <>
      <section className="menuDeClases">
        <div className="tituloClases">
          <h3>Te ofrecemos clases de...</h3>
        </div>

        <div className="clases">
          {actividades
            .filter((actividad) => actividad.id !== "4")
            .map((actividad) => (
              <div
                className={`rotating-card ${actividad.className}`}
                key={actividad.id}
              >
                <div className="card-side front">
                  <div className="titulo">
                    <h3>{actividad.nombre}</h3>
                  </div>
                </div>
                <div className="card-side back">
                  <div className="descripcion">
                    <span>{actividad.descripcion}</span>
                  </div>
                  <Link to={`/productos/${actividad.id}`} state={{actividad}}><button>Más detalles</button></Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="masajeCard">
        <div>
          <h3> Y si lo que buscas es un momento de relajación total...</h3>
        </div>

        {actividades
            .filter((actividad) => actividad.id == "4")
            .map((actividad) => (
              <div
                className={`rotating-card ${actividad.className}`}
                key={actividad.id}
              >
                <div className="card-side front">
                  <div className="titulo">
                    <h3>{actividad.nombre}</h3>
                  </div>
                </div>
                <div className="card-side back">
                  <div className="descripcion">
                    <span>{actividad.descripcion}</span>
                  </div>
                  <button>
                    <Link to={`/productos/${actividad.id}`} state={{actividad}}><button>Más detalles</button></Link>
                  </button>
                </div>
              </div>
            ))}

      </section>
      <br />
      <Link to="/">
        <button>Volver al Inicio</button>
      </Link>
    </>
  );
}

export default Servicios;
