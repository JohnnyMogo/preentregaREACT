import { useLocation, useNavigate } from "react-router-dom";

export default function Pagar({ setIsAuthenticated, usuario, setUsuario }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Datos del carrito
  const carrito = location.state?.carrito || [];
  // Calculo del total
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    navigate("/productos");
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
  };

  return (
    <div className="pagar">
      <div>
        <h5>
          ¡Hola {usuario.nombre} ({usuario.email}), a continuación se muestran
          los productos agregados al carrito!
        </h5>
      </div>
      <br />
      <div>
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
                  <td>{item.precio}</td>
                  <td>{item.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        <h4>Total a pagar: ${total}</h4>
      </div>
      <br />
      <div>
        <button onClick={comprar}>Confirmar y Pagar</button>
        <button onClick={() => navigate("/productos")}>Cancelar</button>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </div>
    </div>
  );
}
