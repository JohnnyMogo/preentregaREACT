import React from "react";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <>
  
        

        <section className="menuDeClases">

            <div className="tituloClases">
                <h3>Te ofrecemos clases de...</h3>
            </div>

            <div className="clases">
                <div className="rotating-card yoga">
                    <div className="card-side front">
                        <div className="titulo">
                            <h3>Yoga</h3>
                        </div>

                    </div>
                    <div className="card-side back">
                        <div className="descripcion">
                            <span>Fortalecemos y flexibilizamos nuestro cuerpo físico mientras cultivamos
                                la atención plena a través de movimientos conscientes y respiración enfocada.</span>

                        </div>
                        <button>
                            <a href="./pages/yoga.html">+ INFO</a>
                        </button>

                    </div>
                </div>
                <div className="rotating-card yogaterapia">
                    <div className="card-side front">
                        <div className="titulo">
                            <h3>Yogaterapia</h3>
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="descripcion">
                            <span>El yoga terapéutico te acompaña en tu proceso de recuperación, mejorando
                                tu calidad de vida a través de movimientos y respiraciones conscientes. </span>

                        </div>
                        <button>
                            <a href="./pages/yogaterapia.html">+ INFO</a>
                        </button>

                    </div>
                </div>
                <div className="rotating-card acroyoga">
                    <div className="card-side front">
                        <div className="titulo">
                            <h3>Acroyoga</h3>
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="descripcion">
                            <span>Combina la armonía del yoga, la emoción de las acrobacias y la
                                profundidad de las artes terapéuticas. Trabajaremos la fuerza física y la destreza, al
                                mismo
                                tiempo que la confianza en ti mismo y en los demás.</span>

                        </div>
                        <button>
                            <a href="./pages/acroyoga.html">+ INFO</a>
                        </button>
                    </div>
                </div>

            </div>



        </section>

        

        <section className="masajeCard">

            <div>
                <h3> Y si lo que buscas es un momento de relajación total...</h3>
            </div>

            <div className="rotating-card masaje">
                <div className="card-side front">
                    <div className="titulo">
                        <h3>Masaje Tailandés</h3>
                    </div>
                </div>
                <div className="card-side back">
                    <div className="descripcion">
                        <span>El masaje tailandés es una antigua técnica terapéutica que combina estiramientos, presión
                            y manipulación de tejidos para aliviar el estrés, mejorar la flexibilidad y promover el
                            bienestar general. Se caracteriza por su enfoque en líneas de energía y puntos de presión
                            específicos, utilizando manos, codos, rodillas y pies para aplicar presión y estirar el
                            cuerpo de manera fluida y armoniosa.</span>

                    </div>
                    <button>
                        <a href="./pages/masaje.html">+ INFO</a>
                    </button>
                </div>
            </div>

        </section>
        <br />
        <Link to="/">
        <button>Volver al Inicio</button>
      </Link>

        


      
    </>
  );
}

export default Servicios;
