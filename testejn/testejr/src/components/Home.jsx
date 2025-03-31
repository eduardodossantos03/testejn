import React from "react";
import '../styles/home.scss'

function Home() {
  return (
    <>
      <nav>
        <div className="nav-top">
          <img src="../src/assets/Frame 2364.png" alt="Imagem do topo" />
        </div>
        <div className="logo">
          <img src="./src/assets/Group 35 (1).png" alt="Logo" />
          <input type="text" placeholder="O que está buscando?" id="buscar" />
          <div className="icones">
            <img src="../src/assets/Group.png" alt="Ícone de grupo" />
            <img src="../src/assets/Heart.png" alt="Ícone de coração" />
            <img src="../src/assets/UserCircle.png" alt="Ícone de usuário" />
            <img src="../src/assets/ShoppingCart.png" alt="Ícone de carrinho" />
          </div>
        </div>
      </nav>
      

    </>
  );
}

export default Home;

