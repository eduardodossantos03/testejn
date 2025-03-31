import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/produtos.scss";
import Produtos from "./Produtos";


function Modal() {
  return (
    <>
      <div className="titulo-card">
        <h1>Produtos Relacionados</h1>
      </div>
      <Produtos />
    </>
  );
}



export default Modal;
