import { useNavigate, Link } from "react-router-dom";

export default function Carrito({ carrito, setCarrito }) {
  const navigate = useNavigate();

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  const quitarCantidad = (idProducto) => {
    const carritoActualizado = carrito
      .map((producto) => {
        if (producto.id === idProducto) {
          const cantidadActual = producto.cantidad || 1;
          if (cantidadActual === 1) {
            return null;
          }
          return { ...producto, cantidad: cantidadActual - 1 };
        }
        return producto;
      })
      .filter((producto) => producto !== null);

    setCarrito(carritoActualizado);
  };

  const agregarCantidad = (idProducto) => {
    const nuevoCarrito = carrito.map((producto) => {
      if (producto.id === idProducto) {
        return {
          ...producto,
          cantidad: (producto.cantidad || 1) + 1,
        };
      }
      return producto;
    });
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div>
      <h3>Carrito de Compras</h3>
      <br />
      {carrito.length === 0 ? (
        <p>El carrito esta vacío</p>
      ) : (
        <>
          <div className="table-container">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>${item.precio.toFixed(2)}</td>
                    <td>
                      {item.cantidad}{" "}
                      <button className="botonCantidad" onClick={() => quitarCantidad(item.id)}>-</button>
                      <button className="botonCantidad" onClick={() => agregarCantidad(item.id)}>
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <p>Total: ${total.toFixed(2)}</p>
          <br />
          <button onClick={vaciarCarrito}> Vaciar carrito </button>
          <button onClick={irAPagar}>Pagar</button>
          <br />
        </>
      )}
      <br />

      <Link to="/">
        <button>Volver al Inicio</button>
      </Link>
    </div>
  );
}
