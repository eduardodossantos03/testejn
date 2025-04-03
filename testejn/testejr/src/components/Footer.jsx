
import React from 'react';
import '../styles/Footer.scss';  

function Footer() {
  return (
    <footer className="rodape">
      <div className="footer-logo">
      <img src="./src/assets/logo.svg" alt="computador" /> 
        <div className="footer-subtitle">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <img src="./src/assets/icons/insta.svg" alt="Redes sociais" />
          <img src="./src/assets/icons/face.svg" alt="Redes sociais" />
          <img src="./src/assets/icons/linkedin.svg" alt="Redes sociais" />
        </div>
      </div>
      <div className="text-footer">
        <div className="footer-section">
          <h3>Institucional</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Movimento</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ajuda</h3>
          <ul>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Termos</h3>
          <ul>
            <li><a href="#">Termos e condições</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Troca e devolução</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}





export default Footer;

