import "../App.css";
import React from "react";
import homero from ".././assets/img/homero.png";

const Frases = ({ personaje }) => {
    return (
        <>
            <section className="d-flex border bg-light my-5 media">
                <aside className="mediaImg">
                    <img className="imagen" src={personaje.image} alt={personaje.character}></img>
                </aside>
                <aside className="mediaFrase container">
                    <h3 className="fw-1 mediaFrase1 ">{personaje.character}</h3>
                    <p className="lead ">{personaje.quote}</p>
                </aside>
            </section>
        </>
    );
};

export default Frases;
