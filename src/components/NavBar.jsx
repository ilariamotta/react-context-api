import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BudgetEconomicContext } from "../context/BudgetContext";

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

    const { budgetMode, setBudgetMode } = useContext(BudgetEconomicContext);


    return (
        <>
        <ul className="d-flex justify-content-between gap-5">
                {links.map((link, index) => {
                    return (
                        <li key={index}><NavLink to={link.path} className="links">{link.pagina}</NavLink></li>
                    )
                })}
            </ul>
            <button className="btn btn-outline-dark" onClick={() => }><i className="bi-currency-dollar"></i>Modalità Budget</button>
            </>
    )
}


