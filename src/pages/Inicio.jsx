import React from 'react'

function Inicio() {
  return (
    <>
    <main>

        

        <section class="banner">

            <div class="bannerText">

                <h2>Yoga - AcroYoga - Masaje Tailandés</h2>
                <p>En Palermo o a domicilio <br /> Regalate o regala un momento de conexión, paz y presencia.</p>


            </div>

             
            <div class="carousel">
                <div class="carousel-inner"></div>
            </div>


        </section>




        

        <section class="menuDeClases">

            <div class="tituloClases">
                <h3>Te ofrecemos clases de...</h3>
            </div>

            <div class="clases">
                <div class="rotating-card yoga">
                    <div class="card-side front">
                        <div class="titulo">
                            <h3>Yoga</h3>
                        </div>

                    </div>
                    <div class="card-side back">
                        <div class="descripcion">
                            <span>Fortalecemos y flexibilizamos nuestro cuerpo físico mientras cultivamos
                                la atención plena a través de movimientos conscientes y respiración enfocada.</span>

                        </div>
                        <button>
                            <a href="./pages/yoga.html">+ INFO</a>
                        </button>

                    </div>
                </div>
                <div class="rotating-card yogaterapia">
                    <div class="card-side front">
                        <div class="titulo">
                            <h3>Yogaterapia</h3>
                        </div>
                    </div>
                    <div class="card-side back">
                        <div class="descripcion">
                            <span>El yoga terapéutico te acompaña en tu proceso de recuperación, mejorando
                                tu calidad de vida a través de movimientos y respiraciones conscientes. </span>

                        </div>
                        <button>
                            <a href="./pages/yogaterapia.html">+ INFO</a>
                        </button>

                    </div>
                </div>
                <div class="rotating-card acroyoga">
                    <div class="card-side front">
                        <div class="titulo">
                            <h3>Acroyoga</h3>
                        </div>
                    </div>
                    <div class="card-side back">
                        <div class="descripcion">
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

        

        <section class="masajeCard">

            <div>
                <h3> Y si lo que buscas es un momento de relajación total...</h3>
            </div>

            <div class="rotating-card masaje">
                <div class="card-side front">
                    <div class="titulo">
                        <h3>Masaje Tailandés</h3>
                    </div>
                </div>
                <div class="card-side back">
                    <div class="descripcion">
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

        







        {/* <!-- Se uso un WIDGET para agregar las reseñas --> */}
        <section class="resenias">
            {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div class="elfsight-app-f7302364-bdbd-4c5e-ba8a-b9dbaaa36b54" data-elfsight-app-lazy></div>

        </section>




        


    </main>
    
    </>
  )
}

export default Inicio