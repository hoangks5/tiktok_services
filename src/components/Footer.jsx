import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="TikTok Logo" className="site-logo" />
            </div>
            <nav className="footer-nav">
              <ul className="footer-links">
                <li><a href="/about">Về chúng tôi</a></li>
                <li><a href="/products">Sản phẩm</a></li>
                <li><a href="/services">Dịch vụ</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Tuyển dụng</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-right">
            <div className="footer-contact">
              <div className="contact-info">
                <h3>Thông tin liên hệ</h3>
                <p><i className="fas fa-map-marker-alt"></i> 123 Đường ABC, Quận 1, TP.HCM</p>
                <a href="mailto:contact@example.com">
                  <i className="fas fa-envelope"></i> contact@example.com
                </a>
                <a href="tel:+84123456789">
                  <i className="fas fa-phone"></i> +84 123 456 789
                </a>
              </div>
              <div className="business-hours">
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                <p>Thứ 7: 8:00 - 12:00</p>
                <p>Chủ nhật: Nghỉ</p>
              </div>
              <div className="social-links">
                <h3>Kết nối với chúng tôi</h3>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2024 Company Name. Tất cả quyền được bảo lưu.</p>
            <div className="footer-legal">
              <a href="/privacy">Chính sách bảo mật</a>
              <a href="/terms">Điều khoản sử dụng</a>
              <a href="/sitemap">Sơ đồ trang</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer; 