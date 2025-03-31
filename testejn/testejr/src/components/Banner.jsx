import React from 'react';
import '../styles/blackfriday.scss';

const Banner = () => {
  return (
    <>
      <section className="lista-categoria">
        <div className="lista-categorias">
          <ul>
            <li>Todas as categorias</li>
            <li>Supermercado</li>
            <li>Livros</li>
            <li>Moda</li>
            <li>Lançamentos</li>
            <li>Ofertas do dia</li>
            <li>Assinaturas</li>
          </ul>
        </div>
      </section>

      <section className="banner-container">
        <div className="blackfriday">
          <h1>Venha conhecer nossas promoções!</h1>
          <h2>50% OFF em produtos selecionados!</h2>
          <button>Ver Produtos</button>
        </div>
      </section>

      <section>
        <div className="sessoes">
          <ul>
          <img src="./src/assets/tecnologia.png" alt="computador" />
          <img src="./src/assets/mercado.png" alt="Mercado" />
          <img src="./src/assets/bebidas.png" alt="garrafa" />
          <img src="./src/assets/martelo.png" alt="materlo" />
          <img src="./src/assets/saude.png" alt="saude" />
          <img src="./src/assets/corrida.png" alt="corredors" />
          <img src="./src/assets/moda.png" alt="roupas" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Banner;



