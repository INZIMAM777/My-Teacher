export const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #1e293b; /* Dark Blue/Gray */
            color: #e2e8f0; /* Light gray text */
            padding: 40px 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
          }

          .footer .logo {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 15px;
            color: white;
          }

          .footer-section h4 {
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: bold;
            color: white;
          }

          .footer-section ul {
            list-style: none;
            padding: 0;
          }

          .footer-section ul li {
            margin: 6px 0;
          }

          .footer-section ul li a {
            color: #e2e8f0;
            text-decoration: none;
            font-size: 14px;
          }

          .footer-section ul li a:hover {
            text-decoration: underline;
          }

          .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 12px;
          }

          .social-icons a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            background: #334155;
            color: white;
            border-radius: 50%;
            transition: background 0.3s;
          }

          .social-icons a:hover {
            background: #2563eb;
          }

          .social-icons svg {
            width: 18px;
            height: 18px;
          }

          .footer-bottom {
            text-align: center;
            background: #0f172a;
            color: #94a3b8;
            padding: 12px;
            font-size: 13px;
            margin-top: 20px;
          }
        `}
      </style>

      {/* Footer */}
      <footer>
        <div className="footer">
          {/* Logo + About */}
          <div>
            <div className="logo">My-Teacher</div>
            <p>
              Empowering students with knowledge and connecting teachers worldwide.
            </p>
            <div className="social-icons">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.95 1.8-2 3.7-2 3.95 0 4.9 2.6 4.9 6V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.8 2.9 1.3.1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.8 11.8 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0012 0z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 22c-2 0-3.9-.5-5.6-1.6l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.9 2 14 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5-7.5c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.1-.7-1.6-1-2.1-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.3 3 1.5 3.2c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.3-.2-.4-.5-.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@myteacher.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Bangalore, India</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} My-Teacher. All rights reserved.
        </div>
      </footer>
    </>
  );
};
