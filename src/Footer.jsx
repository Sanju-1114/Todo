import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="app-info">
          <h3 className="footer-title">✨ TaskFlow</h3>
          <p className="app-description">
            Streamline your productivity with our intuitive task management
            system.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} TaskFlow. Made with ❤️ for productivity enthusiasts.
          </div>
        </div>
      </div>
    </footer>
  );
}
