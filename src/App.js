import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theSimpsonBanner from "./assets/img/theSimpsonBanner.png";
import Frases from "./components/Frases";
import { Button } from "react-bootstrap";
function App() {
    return (
        <>
            <section className="app">
                <article className="d-flex flex-column align-items-center">
                    <aside className="mt-3">
                        <img className="mediaApp" src={theSimpsonBanner} alt="banner"></img>
                    </aside>
                    <aside className="mt-5">
                        <Button type="button" variant="warning">
                            Obtener frase
                        </Button>
                    </aside>
                    <Frases />
                </article>
            </section>
        </>
    );
}

export default App;
