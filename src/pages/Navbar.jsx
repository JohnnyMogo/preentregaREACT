import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <header>

        {/* <!-- Barra de navegación --> */}
        <nav>
            <div class="inicio">
                <Link to="/">Inicio</Link> 

            </div>

            <div class="listaNav">

                <div class="botonesNav">

                    <div class="dropdown">
                        <button>
                            <a href="#clases">Clases</a>
                            <div class="dropdown-content">
                                <a href="./pages/yoga.html">Yoga</a>
                                <a href="./pages/yogaterapia.html">Yogaterapia</a>
                                <a href="./pages/acroyoga.html">AcroYoga</a>
                            </div>
                        </button>

                    </div>
                </div>
                <div class="botonesNav">
                    <button>
                        <Link to="/servicios">Servicios</Link>
                    </button>

                </div>
                <div class="botonesNav">
                    <button>
                        <Link to="/productos">Productos</Link>
                    </button>

                </div>
            </div>


        </nav>
    </header>

  )
}

export default Navbar