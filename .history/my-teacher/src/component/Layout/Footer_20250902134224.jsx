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
            margin-top: 10px;
          }

          .social-icons a {
            display: inline-block;
            width: 30px;
            height: 30px;
            background: #334155;
            color: white;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            transition: background 0.3s;
          }

          .social-icons a:hover {
            background: #2563eb;
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
              <a href="#"></a>
              <a href="#">T</a>
              <a href="#">I</a>
              <a href="#">L</a>
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
