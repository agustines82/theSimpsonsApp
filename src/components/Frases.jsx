import React from "react";
import homero from ".././assets/img/homero.png";
const Frases = () => {
    return (
        <>
            <section className="container d-flex border bg-light my-5">
                <aside className="ms-5 my-5">
                    <img src={homero} alt="homero"></img>
                </aside>
                <aside className="ms-5 my-5">
                    <h3 className="fw-1">Homer Simpson</h3>
                    <p className="lead">Facts are meaningless. You could use facts to prove anything that's even remotely true.</p>
                </aside>
            </section>
        </>
    );
};

export default Frases;
