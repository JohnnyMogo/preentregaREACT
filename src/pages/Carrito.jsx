export default function Carrito({ carrito, setCarrito }) {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div>
      <h3>Productos en el Carrito</h3>
      {carrito.length === 0 ? (
        <p>El carrito esta vacío</p>
      ) : (
        <>
          <div>
            {carrito.map((producto) => (
              <p key={producto.id}>
                {producto.nombre} - ${producto.precio} - {producto.cantidad}
              </p>
            ))}
          </div>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={vaciarCarrito}> Vaciar carrito </button>
        </>
      )}
    </div>
  );
}
