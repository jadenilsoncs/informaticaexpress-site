import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'; // Seu componente de destaque
import './Home.css';
const Home = () => {
  // Link do seu WhatsApp (o mesmo que definimos ontem)
  const whatsappUrl = "https://wa.me/5537998126948?text=Olá! Estava navegando no site da Informática Express e gostaria de um orçamento.";
  return (
    <div className="home-main-container">
      {/* 1. BANNER PRINCIPAL (O que você chamou de Hero) */}
      <Banner />
      {/* 2. FAIXA DE DESTAQUE (Igual a faixa vermelha da Detalhe, mas Azul) */}
      <div style={{ backgroundColor: '#2196f3', color: '#fff', padding: '15px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        Suporte Técnico e Soluções Digitais com agilidade e confiança!
      </div>
      {/* 3. SEÇÃO DE SERVIÇOS (Baseado na seção de 'Linhas' da Detalhe) */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1a2b48', fontSize: '2.2rem', marginBottom: '30px' }}>Nossos Serviços</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Card Manutenção */}
          <div style={{ width: '300px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Manutenção</h3>
            <p>Computadores e Notebooks</p>
          </div>
          {/* Card Redes */}
          <div style={{ width: '300px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Redes</h3>
            <p>Configuração e Estrutura</p>
          </div>
          {/* Card Web */}
          <div style={{ width: '300px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Web Design</h3>
            <p>Criação de Sites e Sistemas</p>
          </div>
        </div>
      </section>
      {/* 4. SOBRE (Baseado na seção 4 da Detalhe) */}
      <section style={{ background: '#f4f4f4', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1a2b48' }}>Sobre a Informática Express</h2>
        <p style={{ maxWidth: '700px', margin: '20px auto', lineHeight: '1.6' }}>
          Sua parceira tecnológica em Cláudio/MG. Oferecemos soluções completas para manter sua empresa sempre conectada e produtiva.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#1a2b48', color: '#fff', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px' }}
        >
          Falar com um Especialista
        </a>
      </section>

    </div>
  );
};
export default Home;