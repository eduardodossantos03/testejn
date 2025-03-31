import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/header.scss";
import "../styles/produtos.scss";
import Produtos from "./Produtos";


function Header() {
  return (
    <>
      <div className="titulo-card">
        <h1>Produtos Relacionados</h1>
      </div>

      <section className="categorias">
        <div className="produtos">
          <ul>
            <li>CELULARES</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVs</li>
            <li>VER TODOS</li>
          </ul>
        </div>
      </section>

      <Produtos />
    </>
  );
}



export default Header;
