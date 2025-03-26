import "./styles/newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h1>Inscreva-se na nossa newsletter</h1>
      <p>Receba as novidades e conteúdos exclusivos do nosso site</p>
      <div className="form">
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu email" />
        <button>Inscrever</button>
      </div>
    </section>
  );
};

export default Newsletter;
