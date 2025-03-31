import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/produtos.scss";
import '../styles/card.scss'

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); 
  const carrosselRef = useRef(null);

  useEffect(() => {
    axios
      .get("/api/produtos")
      .then((response) => {
        if (response.data.success) {
          setProdutos(response.data.products);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  const scrollLeft = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  const openModal = (produto) => {
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProdutoSelecionado(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && produtoSelecionado && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img
              src={produtoSelecionado.photo}
              alt={produtoSelecionado.productName}
              className="produto-imagem-modal"
            />
            <div className="conteudo">
            <h3 className="produto-nome">{produtoSelecionado.productName}</h3>
            <p className="produto-descricao">{produtoSelecionado.descriptionShort}</p>
            <p className="produto-preco">
              R$ {produtoSelecionado.price.toLocaleString("pt-BR")}
            </p>
            <button className="botao-modal">Comprar</button>
            </div>
          </div>
        </div>
      )}


      <div className="carrossel-container">
        <div className="carrossel">
          <button className="botao-esquerda" onClick={scrollLeft}>
            ‹
          </button>
          <div className="carrossel-itens" ref={carrosselRef}>
            {produtos.map((produto, index) => (
              <div
                key={index}
                className="produto-card"
                onClick={() => openModal(produto)} 
              >
                <img
                  src={produto.photo}
                  alt={produto.productName}
                  className="produto-imagem"
                />
                <h3 className="produto-nome">{produto.productName}</h3>
                <p className="produto-descricao">{produto.descriptionShort}</p>
                <p className="produto-preco">
                  R$ {produto.price.toLocaleString("pt-BR")}
                </p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))}
          </div>
          <button className="botao-direita" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
