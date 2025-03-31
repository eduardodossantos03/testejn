import React, { useState } from 'react';
import '../styles/form.scss'

function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inscrição
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Consentimento:', consent);
    };

    return (
        <section>
            <section>
                <div className="formulario">
                    <div className="inscricao">
                        <h1>Inscreva-se na nossa newsletter</h1>
                        <h3>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos do Econverse</h3>
                    </div>
                    <div className="input">
                        <div className="inputs-inline">
                            <label htmlFor="nome">
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    id="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </label>
                            
                            <label htmlFor="email">
                                <input
                                    type="text"
                                    placeholder="Digite seu email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            
                            <input
                                type="button"
                                value="Inscrever"
                                id="button"
                                onClick={handleSubmit}
                            />
                        </div>
                        
                        <div className="checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>Aceito os termos e condiçoes</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Form;
