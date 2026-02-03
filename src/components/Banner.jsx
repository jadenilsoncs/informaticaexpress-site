import React from 'react';
const Hero = () => {
  // Link do WhatsApp com sua mensagem personalizada
  const whatsappLink = "https://wa.me/5537998126948?text=Olá! Vi seu site e gostaria de um orçamento sobre seus serviços de informática.";
  return (
    <section style={{
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1a2b48 0%, #2c3e50 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '15px', fontWeight: 'bold' }}>
        Tecnologia de <span style={{ color: '#2196f3' }}>Resultado</span>
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', marginBottom: '30px', opacity: '0.9' }}>
        Suporte especializado, redes e soluções digitais sob medida para você e sua empresa.
      </p>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#2196f3',
            color: '#fff',
            padding: '12px 25px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          Solicitar Orçamento
        </a>
        <a
          href="#servicos"
          style={{
            border: '2px solid #fff',
            color: '#fff',
            padding: '10px 23px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          Nossos Serviços
        </a>
      </div>
    </section>
  );
};
export default Hero;