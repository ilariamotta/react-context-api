import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../context/BudgetContext";

export default function NavBar() {
    const links = [
        {
            pagina: "Homepage",
            path: "/",
        },
        {
            pagina: "Chi Siamo",
            path: "/about",
        },
        {
            pagina: "Prodotti",
            path: "/prodotti",
        },
    ];

    const { budgetMode, attivaBudget, disattivaBudget } = useBudget();


    return (
        <>
        <ul className="d-flex justify-content-between gap-5">
                {links.map((link, index) => {
                    return (
                        <li key={index}><NavLink to={link.path} className="links">{link.pagina}</NavLink></li>
                    )
                })}
            </ul>
            <button className={`btn ${budgetMode ? "btn-success" : "btn-outline-dark"}`} onClick={() => (budgetMode === true ? disattivaBudget() : attivaBudget())}><i className="bi bi-currency-dollar"></i>Modalità Budget</button>
            </>
    )
}


