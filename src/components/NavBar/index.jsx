import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <ul className="nav-list navbar navbar-expand-lg bg-body-tertiary">
            
            <li className="nav-item">
                <Link to="/">TecnoShop</Link>
            </li>
            
            <li className="nav-item">
                <Link to="/category/motherboard">Motherboard</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/procesador">Procesador</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/ram">RAM</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/tarjeta grafica">Tarjeta Grafica</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/fuente">Fuentes de Alimentacion</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/perifericos">Perifericos</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/pc">PC Armada</Link>
            </li>

            
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    )
}

export default NavBar