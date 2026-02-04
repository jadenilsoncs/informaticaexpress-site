import React from 'react';
import './Footer.css';
const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Informática Express</h4>
          <p>Soluções inteligentes em TI para você e sua empresa.</p>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>📍 Cláudio/MG</p>
          <p>📞 (37) 9 9812-6948</p>
        </div>
        <div className="footer-section">
          <h4>Horário de Atendimento</h4>
          <p>Segunda a Sexta: 08:00 às 18:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {anoAtual} Informática Express - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;