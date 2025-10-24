import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
  const { id } = useParams();
  const location = useLocation();
  const actividad = location.state?.actividad;

  if (!actividad) {
    return (
      <div className="detalleProducto">
        <p>No se pudo cargar el producto</p>
        <Link to="/productos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={`detalleProducto ${actividad.className}Detalle`}>
      <div class="descripcion">
        <div>
          <h2>{actividad.nombre}</h2>
        </div>
        <br />
        <div>
          <h5>Beneficios:</h5>
          <p>{actividad.beneficios}</p>
        </div>
        <br />
        <div>
          <h5>¿Qué necesito para la práctica?</h5>
          <p>{actividad.elementos}</p>
        </div>
        <br />
        <div>
          <h5>¿A quién esta diridiga esta clase?</h5>
          <p>{actividad.publico}</p>
        </div>
      </div>

      <hr />
      <Link to="/servicios">
        <button>Volver</button>
      </Link>
    </div>
  );
};
export default ProductoDetalle;
