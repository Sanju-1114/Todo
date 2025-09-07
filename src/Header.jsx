import { useState, useEffect } from 'react';
import "./Header.css";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <div className="logo-section">
            <h1 className="header-title">TaskFlow</h1>
          </div>
          <div className="header-subtitle">
            Organize your life, one task at a time
          </div>
        </div>
        
        <div className="header-info">
          <div className="date-time">
            <div className="current-date">{formatDate(currentTime)}</div>
            <div className="current-time">{formatTime(currentTime)}</div>
          </div>
        </div>
      </div>
      
      <div className="header-decoration">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </header>
  );
}