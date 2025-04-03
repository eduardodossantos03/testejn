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
          <h2 className="frase">
      <span className="green">50% off </span> 
      <span className='white'>nos Produtos</span>
    </h2>
          <button>Ver Produtos</button>
        </div>
      </section>

      <section>
        <div className="sessoes">

        <div className="category-card ">
            <div className="category-img">
            <img src="./src/assets/components/Tecno.svg" alt="Supermercado" className="icon" />
            </div>
            <p className="category-name">Tecnologia</p>
          </div>

          <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/Mercado.svg" alt="Supermercado" className="icon" />
            </div>
            <p className="category-name">Supermercado</p>
          </div>

        <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/Bebida.svg" alt="Bebidas" className="icon" />
            </div>
            <p className="category-name">Bebidas</p>
          </div>

          <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/Ferramentas.svg" alt="ferramentas" className="icon" />
            </div>
            <p className="category-name">Ferramentas</p>
          </div>
          
          <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/Saude.svg" alt="Saude" className="icon" />
            </div>
            <p className="category-name">Saúde</p>
          </div>
          
          <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/Corrida.svg" alt="esporte" className="icon" />
            </div>
            <p className="category-name">Esporte e fitness</p>
          </div>

          <div className="category-card">
            <div className="category-img">
            <img src="./src/assets/components/moda.svg" alt="Moda" className="icon" />
            </div>
            <p className="category-name">Moda</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;



