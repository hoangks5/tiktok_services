import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="TikTok Logo" className="site-logo" />
          </div>
          
          <button className="navbar-toggler">
            <i className="fas fa-bars"></i>
          </button>

          <div className="nav-links">
            <div className="dropdown">
              <a href="#" className="dropdown-toggle">
                Dịch vụ Instagram <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Đang phát triển...</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">
                Dịch vụ TikTok <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Mua Người Theo Dõi TikTok</a></li>
                <li><a href="#">Mua Lượt Thích TikTok</a></li>
                <li><a href="#">Mua Lượt Xem TikTok</a></li>
              </ul>
            </div>

            <a href="/blog">Blog</a>
            <a href="/faq">Hỏi đáp</a>
            <a href="/contact">Liên hệ</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header; 