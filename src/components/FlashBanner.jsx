import React, { useState, useEffect } from 'react';
import './FlashBanner.css';

function FlashBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 21,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours >= 0 ? newHours : 0,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flash-banner">
      <div className="flash-content">
        <i className="fas fa-bolt flash-icon"></i>
        <span className="flash-text">Khuyến Mãi | Giảm 50% Người Theo Dõi, Lượt Thích, Lượt Xem</span>
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">GIỜ</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">PHÚT</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">GIÂY</span>
          </div>
        </div>
        <button className="flash-button">Đăng ký ngay</button>
      </div>
    </div>
  );
}

export default FlashBanner; 