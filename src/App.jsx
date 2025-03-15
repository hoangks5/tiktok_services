import React from 'react';
import './App.css';
import Header from './components/Header';
import FlashBanner from './components/FlashBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <FlashBanner />
      <div className="app-container">
        <Header />
        
        <main className="main-content" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <section className="hero-section fade-in">
            <h1 className="hero-title">Tăng Tương Tác TikTok</h1>
            <p className="hero-description">
              Giải pháp tối ưu để tăng followers, likes và views cho tài khoản TikTok của bạn
            </p>
            <button className="cta-button">Dùng Thử Miễn Phí</button>
          </section>

          <section className="services-grid">
            <div className="service-card fade-in">
              <h3>Tăng Followers</h3>
              <p>Tăng người theo dõi thực, tương tác cao</p>
              <button className="cta-button">Xem Chi Tiết</button>
            </div>

            <div className="service-card fade-in">
              <h3>Tăng Likes</h3>
              <p>Tăng lượt thích nhanh chóng, an toàn</p>
              <button className="cta-button">Xem Chi Tiết</button>
            </div>

            <div className="service-card fade-in">
              <h3>Tăng Views</h3>
              <p>Tăng lượt xem, đẩy video lên xu hướng</p>
              <button className="cta-button">Xem Chi Tiết</button>
            </div>

            <div className="service-card fade-in">
              <h3>Tăng Comments</h3>
              <p>Tăng tương tác bình luận chất lượng</p>
              <button className="cta-button">Xem Chi Tiết</button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
