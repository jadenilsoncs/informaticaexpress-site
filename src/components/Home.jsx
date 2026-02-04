import React from 'react';
import Banner from './Banner';
import Services from './Services';
import './Home.css';
const Home = () => {
  const whatsappUrl = "https://wa.me/5537998126948?text=Olá! Estava navegando no site da Informática Express e gostaria de um orçamento.";
  return (
    <div className="home-main-container">
      {/* 1. CARROSSEL */}
      <Banner />
      {/* 2. FAIXA DE DESTAQUE */}
      <div style={{ backgroundColor: 'var(--cor-secundaria)', color: 'var(--cor-texto-claro)', padding: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        Suporte Técnico e Soluções Digitais com agilidade e confiança!
      </div>
      {/* 3. CARDS DE SERVIÇOS */}
      <Services />
      {/* 4. SEÇÃO SOBRE */}
      <section style={{ background: 'var(--cor-fundo-cinza)', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--cor-primaria)', fontSize: '2.2rem', marginBottom: '20px' }}>Sobre a Informática Express</h2>
        <p style={{ maxWidth: '750px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem', color: '#555' }}>
          Sua parceira tecnológica em Cláudio/MG. Oferecemos soluções completas para manter sua empresa sempre conectada e produtiva, unindo experiência técnica com atendimento personalizado.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'var(--cor-primaria)',
            color: 'var(--cor-texto-claro)',
            padding: '15px 40px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            marginTop: '30px'
          }}
        >
          Falar com um Especialista
        </a>
      </section>
    </div>
  );
};
export default Home;