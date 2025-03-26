import "./styles/productList.scss";

const ProductList = () => {
  const products = [
    { id: 1, image: "iphone.png", title: "Produto 1", price: 28.9 },
    { id: 2, image: "iphone.png", title: "Produto 2", price: 28.9 },
    { id: 3, image: "iphone.png", title: "Produto 3", price: 28.9 },
    { id: 4, image: "iphone.png", title: "Produto 4", price: 28.9 },
  ];

  return (
    <section className="product-list">
      <h1>Produtos Relacionados</h1>
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={`./imagens/${product.image}`} alt={product.title} />
            <h3>{product.title}</h3>
            <h2>R$ {product.price.toFixed(2)}</h2>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
