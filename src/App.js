import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theSimpsonBanner from "./assets/img/theSimpsonBanner.png";
import Frases from "./components/Frases";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./components/Spinner";
function App() {
    //creamos una variable estate para renderizar la frase de los simpsons
    const [personaje, setPersonaje] = useState({});
    const [mostrarSpinner, setMostrarSpinner] = useState(true);
    //ciclo de vida
    //useEffect(()=>{}) esto se ejecuta en montaje y actualizacion
    //useEffect(()=>{},[]) esto se ejecuta solo en montaje
    useEffect(() => {
        consultarAPI();
    }, []);

    //async se usa para decirle a JS que la funcion es asincronica , el programa debe esperar a que se resuelva esta cuestion para eso utilizamos el await.
    const consultarAPI = async () => {
        //fetch y axius sirve para hacer peticiones a las API. fetch va a guardar la respuesta de la api en la variable respuesta

        //como esto puede fallar se lo guarda en una estructura trychatch donde 1ro intentamos el codigo y si esta bien lo ejecuta y si no esta bien ejecuta el codigo de abajo. sirve para controlar errores

        try {
            setMostrarSpinner(true);
            const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
            const dato = await respuesta.json();
            setPersonaje(dato[0]);

            //si quiero retrasar la respuesta y que el sinner se muestre por mas tiempo: (no es necesario el setTimeout...)
            setTimeout(() => {
                setMostrarSpinner(false);
            }, 2500);
            //actualizar el state del spinner
        } catch (error) {
            //mostrar un cartel al usurario
            setMostrarSpinner(false);
        }
    };

    //operador ternario
    //(consicion logica)? (codigo cuando es true) : (codigo cuando es false)

    const mostrarComponente = mostrarSpinner ? <Spinner /> : <Frases personaje={personaje} />;

    return (
        <>
            <main className="app">
                <section>
                    <article className="d-flex flex-column align-items-center">
                        <aside className="mt-3">
                            <img className="mediaApp" src={theSimpsonBanner} alt="banner"></img>
                        </aside>
                        <aside className="mt-5">
                            <Button type="button" variant="warning" onClick={consultarAPI}>
                                Obtener frase
                            </Button>
                        </aside>
                        {mostrarComponente}
                    </article>
                </section>
            </main>
        </>
    );
}

export default App;
