export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(135deg, #121212 0%, #1e1e1e 100%);
            color: #e0e0e0;
            padding: 60px 20px 30px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            position: relative;
            overflow: hidden;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }

          .footer-section {
            position: relative;
            z-index: 2;
          }

          .footer .logo {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 20px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .logo-icon {
            font-size: 32px;
            background: linear-gradient(135deg, #bb86fc 0%, #03dac6 100%);
            border-radius: 8px;
            padding: 5px;
          }

          .footer-section h4 {
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 700;
            color: white;
            position: relative;
            padding-bottom: 10px;
          }

          .footer-section h4::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, #bb86fc, #03dac6);
            border-radius: 2px;
          }

          .footer-section p {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 14px;
            opacity: 0.9;
          }

          .footer-section ul {
            list-style: none;
            padding: 0;
          }

          .footer-section ul li {
            margin: 12px 0;
            transition: transform 0.3s ease;
          }

          .footer-section ul li:hover {
            transform: translateX(5px);
          }

          .footer-section ul li a {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            padding: 8px 0;
          }

          .footer-section ul li a:hover {
            color: #bb86fc;
            text-decoration: none;
          }

          .footer-section ul li a::before {
            content: '→';
            opacity: 0;
            transition: opacity 0.3s ease;
            color: #bb86fc;
          }

          .footer-section ul li a:hover::before {
            opacity: 1;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
          }

          .contact-icon {
            width: 36px;
            height: 36px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #bb86fc;
            font-size: 16px;
            flex-shrink: 0;
          }

          .newsletter {
            background: rgba(30, 30, 30, 0.8);
            padding: 25px;
            border-radius: 12px;
            margin-top: 20px;
            border: 1px solid rgba(187, 134, 252, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .newsletter h5 {
            margin-bottom: 15px;
            font-size: 16px;
            color: white;
          }

          .newsletter-form {
            display: flex;
            gap: 10px;
          }

          .newsletter-input {
            flex: 1;
            padding: 12px 16px;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 14px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            min-width: 0;
          }

          .newsletter-input::placeholder {
            color: #94a3b8;
          }

          .newsletter-input:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(187, 134, 252, 0.3);
          }

          .newsletter-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: linear-gradient(135deg, #bb86fc 0%, #03dac6 100%);
            color: #121212;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .newsletter-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(187, 134, 252, 0.3);
          }

          .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 20px;
            flex-wrap: wrap;
          }

          .social-icon {
            width: 45px;
            height: 45px;
            background: rgba(30, 30, 30, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #e0e0e0;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .social-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #bb86fc 0%, #03dac6 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 50%;
          }

          .social-icon:hover::before {
            opacity: 1;
          }

          .social-icon svg {
            width: 20px;
            height: 20px;
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease;
          }

          .social-icon:hover svg {
            transform: scale(1.2);
          }

          .footer-bottom {
            text-align: center;
            background: rgba(18, 18, 18, 0.9);
            color: #e0e0e0;
            padding: 20px;
            font-size: 14px;
            margin-top: 40px;
            position: relative;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }

          .back-to-top {
            position: absolute;
            right: 30px;
            top: -20px;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #bb86fc 0%, #03dac6 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #121212;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            font-weight: bold;
            border: none;
          }

          .back-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(187, 134, 252, 0.3);
          }

          /* Animation for the footer */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .footer-section {
            animation: fadeInUp 0.6s ease-out;
          }

          .footer-section:nth-child(1) { animation-delay: 0.1s; }
          .footer-section:nth-child(2) { animation-delay: 0.2s; }
          .footer-section:nth-child(3) { animation-delay: 0.3s; }
          .footer-section:nth-child(4) { animation-delay: 0.4s; }

          /* Enhanced Mobile Responsiveness */
          @media (max-width: 1024px) {
            .footer {
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
            }
            
            .newsletter-form {
              flex-direction: column;
            }
          }

          @media (max-width: 768px) {
            .footer {
              grid-template-columns: 1fr;
              gap: 30px;
              padding: 40px 20px 20px;
              text-align: center;
            }

            .footer-section h4::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .contact-item {
              justify-content: center;
              text-align: center;
            }

            .social-icons {
              justify-content: center;
            }

            .newsletter {
              margin: 20px auto 0;
              max-width: 400px;
            }

            .newsletter-form {
              flex-direction: column;
            }

            .back-to-top {
              right: 20px;
              top: -15px;
              width: 35px;
              height: 35px;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 30px 15px 15px;
              gap: 25px;
            }

            .footer .logo {
              font-size: 24px;
              justify-content: center;
            }

            .logo-icon {
              font-size: 28px;
            }

            .footer-section h4 {
              font-size: 16px;
              margin-bottom: 15px;
            }

            .footer-section p {
              font-size: 13px;
            }

            .footer-section ul li a {
              font-size: 13px;
              justify-content: center;
            }

            .contact-item {
              flex-direction: column;
              text-align: center;
              gap: 8px;
            }

            .contact-icon {
              width: 32px;
              height: 32px;
              font-size: 14px;
            }

            .newsletter {
              padding: 20px;
            }

            .newsletter h5 {
              font-size: 15px;
            }

            .newsletter-input {
              padding: 10px 14px;
              font-size: 13px;
            }

            .newsletter-btn {
              padding: 10px 16px;
              font-size: 13px;
            }

            .social-icon {
              width: 40px;
              height: 40px;
            }

            .social-icon svg {
              width: 18px;
              height: 18px;
            }

            .footer-bottom {
              padding: 15px;
              font-size: 13px;
              margin-top: 30px;
            }

            .back-to-top {
              right: 15px;
              top: -12px;
              width: 30px;
              height: 30px;
              font-size: 12px;
            }
          }

          @media (max-width: 360px) {
            .footer {
              padding: 25px 10px 10px;
            }

            .social-icons {
              gap: 8px;
            }

            .social-icon {
              width: 35px;
              height: 35px;
            }

            .social-icon svg {
              width: 16px;
              height: 16px;
            }
          }

          /* Touch device optimizations */
          @media (hover: none) {
            .footer-section ul li:hover {
              transform: none;
            }
            
            .social-icon:hover::before {
              opacity: 0;
            }
            
            .social-icon:hover svg {
              transform: none;
            }
            
            .newsletter-btn:hover {
              transform: none;
            }
            
            .back-to-top:hover {
              transform: none;
            }
          }
        `}
      </style>

      {/* Footer */}
      <footer>
        <div className="footer">
          {/* Logo + About */}
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon">👨‍🏫</span>
              My-Teacher
            </div>
            <p>
              Empowering students with knowledge and connecting teachers worldwide through innovative technology and personalized learning experiences.
            </p>
            
            <div className="social-icons">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.95 1.8-2 3.7-2 3.95 0 4.9 2.6 4.9 6V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.8 2.9 1.3.1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.8 11.8 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0012 0z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 22c-2 0-3.9-.5-5.6-1.6l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.9 2 14 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5-7.5c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.1-.7-1.6-1-2.1-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.3 3 1.5 3.2c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.3-.2-.4-.5-.5z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="newsletter">
              <h5>Subscribe to our Newsletter</h5>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
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
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/teachers">Find Teachers</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/support">Support Center</a></li>
              <li><a href="/documentation">Documentation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div>support@myteacher.com</div>
                  <div style={{fontSize: '12px', opacity: 0.8}}>Email Support</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div>+91 98765 43210</div>
                  <div style={{fontSize: '12px', opacity: 0.8}}>Mon-Fri, 9AM-6PM</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div>Bangalore, India</div>
                  <div style={{fontSize: '12px', opacity: 0.8}}>Karnataka 560001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} My-Teacher. All rights reserved.
          <button onClick={scrollToTop} className="back-to-top">↑</button>
        </div>
      </footer>
    </>
  );
};