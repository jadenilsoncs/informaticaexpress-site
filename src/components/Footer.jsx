import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a2b48', color: '#fff', padding: '40px 20px', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          <h4>Informática Express</h4>
          <p>Soluções em TI</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>(37) 9 9812-6948</p>
          <p>Cláudio/MG</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #333', paddingTop: '10px' }}>
        <p>&copy; 2026 Informática Express.</p>
      </div>
    </footer>
  );
};
export default Footer;