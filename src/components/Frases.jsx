import "./Frases.css";
import React from "react";
import homero from ".././assets/img/homero.png";

const Frases = () => {
    return (
        <>
            <section className="d-flex border bg-light my-5 media">
                <aside className="mediaImg">
                    <img className="imagen" src={homero} alt="homero"></img>
                </aside>
                <aside className="mediaFrase">
                    <h3 className="fw-1 mediaFrase1 ">Homer Simpson</h3>
                    <p className="lead ">Facts are meaningless. You could use facts to prove anything that's even remotely true.</p>
                </aside>
            </section>
        </>
    );
};

export default Frases;
