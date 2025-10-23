import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68dc46127cd1948060a9e4c1.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
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

  const agregarProducto = (product) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === product.id);

      if (existe) {
        return prevCarrito.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...product, cantidad: 1 }];
      }
    });
    alert(`Producto ${product.nombre} agregado al carrito.`);
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="menuCarrito">
        <div class="tituloCarrito">
          <h3>Arma tu pack de actividades</h3>
        </div>

        <div className="items">
          {productos.map((producto) => (
            <div className="rotating-card claseSuelta">
              <div class="card-side front">
                <div className="titulo">
                  <h3>{producto.nombre}</h3>
                </div>
              </div>

              <div>
                <div className="card-side back">
                  <div className="descripcion">
                    <span>{producto.descripcion}</span> <br />
                    <span>Valor: ${producto.precio}</span>
                  </div>
                  <button onClick={() => agregarProducto(producto)}>
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <Carrito carrito={carrito} setCarrito={setCarrito} />
      </div>
    </>
  );
}
