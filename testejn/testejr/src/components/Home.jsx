import React from "react";
import '../styles/home.scss'

function Home() {
  return (
    <>
      <nav>
        <div className="nav-top">
        <p className="frase">
      <span><img id="img" src="./src/assets/icons/checknav.svg" alt="caminhao" /> </span>
      <span className="gray">Compra </span> 
      <span className="blue">100% segura</span> 
    </p>
    <p className="frase">
      <span><img id="img" src="./src/assets/icons/Truck.svg" alt="caminhao" /> </span>
      <span className="blue">Frete grátis </span> 
      <span className="gray">acima de R$200</span> 
    </p>
    <p className="frase">
    <span><img id="img" src="./src/assets/icons/cartao.svg" alt="caminhao" /> </span>
      <span className="blue">Parcele </span> 
      <span className="gray">suas compras</span> 
    </p>
        </div>
        <div className="logo">
        <img id="logo" src="./src/assets/logo.svg" alt="caminhao" />
          <input type="text" placeholder="O que está buscando?" id="buscar" />
          <div className="icones">
            <img src="../src/assets/icons/Group.svg" alt="Ícone de grupo" />
            <img src="../src/assets/icons/Heart.svg" alt="Ícone de coração" />
            <img src="../src/assets/icons/UserCircle.svg" alt="Ícone de usuário" />
            <img src="../src/assets/icons/Carrinho.svg" alt="Ícone de carrinho" />
          </div>
        </div>
      </nav>
      

    </>
  );
}

export default Home;

