import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <main>
        <section className="banner">
          <div className="bannerText">
            <h2>Yoga - AcroYoga - Masaje Tailandés</h2>
            <br />
            <p>
              En Palermo o a domicilio <br /> Regalate o regala un momento de
              conexión, paz y presencia.
            </p>
            <br />
            <button>
              <Link to="/productos">Quiero armar mi pack de actividades</Link>
            </button>
          </div>
        </section>

        {/* <!-- Se uso un WIDGET para agregar las reseñas --> */}
        <section className="resenias">
          {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-f7302364-bdbd-4c5e-ba8a-b9dbaaa36b54"
            data-elfsight-app-lazy
          ></div>
        </section>
      </main>
    </>
  );
}

export default Inicio;
