import React from 'react';
import './Services.css';

const Services = () => {
  const imgPath = "/assets/img/servicos/";

  return (
    <section className="servicos-section">
      <h2 className="servicos-title">Nossos Serviços</h2>
      <div className="servicos-grid">

        {/* Card 1: suporte.jpg */}
        <div className="card-item">
          <div className="card-bg" style={{ backgroundImage: `url("${imgPath}suporte.jpg")` }}></div>
          <div className="card-overlay">
            <h3>Manutenção</h3>
            <p>Conserto de notebooks, computadores e limpeza preventiva.</p>
          </div>
        </div>

        {/* Card 2: redes.jpg */}
        <div className="card-item">
          <div className="card-bg" style={{ backgroundImage: `url("${imgPath}rede.jpg")` }}></div>
          <div className="card-overlay">
            <h3>Redes e Wi-Fi</h3>
            <p>Configuração de roteadores e cabeamento estruturado.</p>
          </div>
        </div>

        {/* Card 3: site.jpg */}
        <div className="card-item">
          <div className="card-bg" style={{ backgroundImage: `url("${imgPath}site.jpg")` }}></div>
          <div className="card-overlay">
            <h3>Criação de Sites</h3>
            <p>Desenvolvimento de sites profissionais para sua empresa.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;