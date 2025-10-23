import React from "react";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <>
      <h1>Servicios</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at deleniti hic eos non maiores possimus, voluptatum tenetur sunt iste architecto iure nam culpa tempora quaerat? Pariatur voluptatum numquam nesciunt!*10</p>
      <Link to="/">
        <button>Volver al Inicio</button>
      </Link>
    </>
  );
}

export default Servicios;
