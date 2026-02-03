import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Estilos Swiper (Importante manter igual à Detalhe)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';
const Banner = () => {
  const whatsappLink = "https://wa.me/5537998126948?text=Olá! Vi seu site e gostaria de um orçamento.";
  return (
    <section className="banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        style={{ height: '100%' }}
      >
        {/* SLIDE 1: SUPORTE */}
        <SwiperSlide>
          <div className="slide-item" style={{ background: 'linear-gradient(rgba(26, 43, 72, 0.8), rgba(26, 43, 72, 0.8)), url("/assets/img/banner1.jpg") center/cover' }}>
            <div className="slide-content">
              <h1>Tecnologia de <span className="highlight">Resultado</span></h1>
              <p>Suporte especializado e infraestrutura de TI para sua empresa não parar.</p>
              <div className="banner-btns">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Orçamento</a>
                <Link to="/servicos" className="btn-secondary">Nossos Serviços</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* SLIDE 2: DESENVOLVIMENTO WEB */}
        <SwiperSlide>
          <div className="slide-item" style={{ background: 'linear-gradient(rgba(33, 150, 243, 0.7), rgba(26, 43, 72, 0.9)), url("/assets/img/banner2.jpg") center/cover' }}>
            <div className="slide-content">
              <h1>Sua Empresa <span className="highlight">Online</span></h1>
              <p>Criação de sites profissionais e sistemas sob medida com tecnologia de ponta.</p>
              <div className="banner-btns">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Começar Projeto</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Banner;