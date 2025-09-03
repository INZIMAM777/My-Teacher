export const About = () => {
  return (
    <>
      <style>
        {`
          :root {
            --primary-dark: #121212;
            --secondary-dark: #1e1e1e;
            --accent-purple: #bb86fc;
            --accent-teal: #03dac6;
            --text-light: #e0e0e0;
            --text-secondary: #a0a0a0;
            --card-surface: #1e1e1e;
            --border-color: #2d2d2d;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            background-color: var(--primary-dark);
          }
          
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          /* Header Section */
          .about-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 20px;
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #2d2d2d 100%);
            border-radius: 16px;
            color: var(--text-light);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
          }
          
          .about-header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
            color: var(--accent-teal);
          }
          
          .about-header p {
            font-size: 1.1rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
            line-height: 1.6;
          }
          
          /* Features Section */
          .features-section {
            margin: 60px 0;
          }
          
          .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 40px;
            color: var(--accent-teal);
            position: relative;
          }
          
          .section-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: var(--accent-purple);
            margin: 15px auto;
            border-radius: 2px;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }
          
          .feature-card {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            text-align: center;
            border: 1px solid var(--border-color);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-purple);
          }
          
          .feature-icon {
            width: 70px;
            height: 70px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 30px;
            color: var(--accent-purple);
            border: 1px solid rgba(187, 134, 252, 0.2);
          }
          
          .feature-card h3 {
            font-size: 1.4rem;
            margin-bottom: 12px;
            color: var(--accent-teal);
          }
          
          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.6;
          }
          
          /* Stats Section */
          .stats-section {
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #252525 100%);
            padding: 60px 20px;
            border-radius: 16px;
            color: var(--text-light);
            margin: 60px 0;
            text-align: center;
            border: 1px solid var(--border-color);
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 24px;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .stat-item {
            padding: 16px;
          }
          
          .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: var(--accent-purple);
            line-height: 1.2;
          }
          
          .stat-label {
            font-size: 1rem;
            opacity: 0.9;
          }
          
          /* Team Section */
          .team-section {
            margin: 60px 0;
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
          }
          
          .team-member {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
          }
          
          .team-member:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-teal);
          }
          
          .member-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            filter: grayscale(30%);
          }
          
          .member-info {
            padding: 20px;
            text-align: center;
          }
          
          .member-name {
            font-size: 1.3rem;
            margin-bottom: 5px;
            color: var(--accent-teal);
          }
          
          .member-role {
            color: var(--accent-purple);
            margin-bottom: 12px;
            font-weight: 500;
          }
          
          .member-info p {
            color: var(--text-secondary);
            line-height: 1.6;
          }
          
          /* CTA Section */
          .cta-section {
            background: linear-gradient(145deg, var(--secondary-dark) 0%, #252525 100%);
            padding: 60px 20px;
            border-radius: 16px;
            text-align: center;
            margin: 60px 0;
            border: 1px solid var(--border-color);
          }
          
          .cta-content {
            max-width: 700px;
            margin: 0 auto;
          }
          
          .cta-title {
            font-size: 2rem;
            margin-bottom: 16px;
            color: var(--accent-teal);
          }
          
          .cta-text {
            font-size: 1.1rem;
            margin-bottom: 24px;
            opacity: 0.9;
            line-height: 1.6;
          }
          
          .cta-button {
            display: inline-block;
            background: var(--accent-purple);
            color: var(--primary-dark);
            padding: 14px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
          }
          
          .cta-button:hover {
            background: var(--accent-teal);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(3, 218, 198, 0.4);
          }
          
          /* Footer */
          .about-footer {
            text-align: center;
            padding: 30px 0;
            color: var(--text-secondary);
            border-top: 1px solid var(--border-color);
          }
          
          /* Enhanced Mobile Responsiveness */
          @media (max-width: 1024px) {
            .about-container {
              padding: 20px 16px;
            }
            
            .about-header h1 {
              font-size: 2.2rem;
            }
            
            .section-title {
              font-size: 1.8rem;
            }
            
            .features-grid {
              gap: 20px;
            }
            
            .feature-card {
              padding: 20px;
            }
          }
          
          @media (max-width: 768px) {
            .about-header {
              padding: 24px 16px;
              margin-bottom: 32px;
            }
            
            .about-header h1 {
              font-size: 2rem;
              margin-bottom: 12px;
            }
            
            .about-header p {
              font-size: 1rem;
            }
            
            .features-section,
            .team-section,
            .stats-section,
            .cta-section {
              margin: 40px 0;
            }
            
            .section-title {
              font-size: 1.6rem;
              margin-bottom: 32px;
            }
            
            .features-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            
            .feature-card {
              padding: 20px;
            }
            
            .feature-icon {
              width: 60px;
              height: 60px;
              font-size: 24px;
              margin-bottom: 16px;
            }
            
            .feature-card h3 {
              font-size: 1.2rem;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            
            .stat-number {
              font-size: 2rem;
            }
            
            .team-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .member-img {
              height: 220px;
            }
            
            .cta-title {
              font-size: 1.6rem;
            }
            
            .cta-text {
              font-size: 1rem;
            }
            
            .cta-button {
              padding: 12px 24px;
              font-size: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .about-header h1 {
              font-size: 1.8rem;
            }
            
            .section-title {
              font-size: 1.4rem;
            }
            
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .stat-item {
              padding: 12px;
            }
            
            .stat-number {
              font-size: 1.8rem;
            }
            
            .stat-label {
              font-size: 0.9rem;
            }
            
            .feature-card {
              padding: 16px;
            }
            
            .feature-icon {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
            
            .feature-card h3 {
              font-size: 1.1rem;
            }
            
            .feature-card p {
              font-size: 0.9rem;
            }
            
            .member-info {
              padding: 16px;
            }
            
            .member-name {
              font-size: 1.1rem;
            }
            
            .member-role {
              font-size: 0.9rem;
            }
            
            .member-info p {
              font-size: 0.9rem;
            }
            
            .cta-section {
              padding: 40px 16px;
            }
            
            .cta-title {
              font-size: 1.4rem;
            }
            
            .cta-text {
              font-size: 0.9rem;
            }
          }
          
          /* Extra small devices */
          @media (max-width: 360px) {
            .about-container {
              padding: 16px 12px;
            }
            
            .about-header {
              padding: 20px 12px;
            }
            
            .about-header h1 {
              font-size: 1.6rem;
            }
            
            .section-title {
              font-size: 1.3rem;
            }
            
            .feature-card {
              padding: 14px;
            }
          }
          
          /* Animation for cards */
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
          
          .feature-card,
          .team-member,
          .stat-item {
            animation: fadeInUp 0.6s ease forwards;
          }
          
          .feature-card:nth-child(1) { animation-delay: 0.1s; }
          .feature-card:nth-child(2) { animation-delay: 0.2s; }
          .feature-card:nth-child(3) { animation-delay: 0.3s; }
          .feature-card:nth-child(4) { animation-delay: 0.4s; }
          .feature-card:nth-child(5) { animation-delay: 0.5s; }
          .feature-card:nth-child(6) { animation-delay: 0.6s; }
          
          /* Improved touch targets for mobile */
          @media (hover: none) {
            .feature-card:hover,
            .team-member:hover {
              transform: none;
            }
            
            .cta-button {
              min-height: 48px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .feature-card,
            .team-member,
            .stat-item {
              animation: none;
            }
            
            .feature-card:hover,
            .team-member:hover,
            .cta-button:hover {
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1>About Teacher Management System</h1>
          <p>Streamlining educator management with modern technology and intuitive design</p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">Why Choose Our System</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Teacher Profiles</h3>
              <p>Comprehensive profiles with contact information, subjects, availability, and more</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🕒</div>
              <h3>Availability Tracking</h3>
              <p>Easily view and manage teacher free time and scheduling</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Access your teacher database from any device, anywhere</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Quickly find teachers by name, subject, or availability</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Data</h3>
              <p>Your information is protected with industry-standard security measures</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Gain insights with visual statistics and reporting tools</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Teachers Managed</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Uptime Reliability</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Established</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Alex Johnson</h3>
                <p className="member-role">Lead Developer</p>
                <p>Full-stack developer with passion for creating intuitive user experiences</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Sarah Williams</h3>
                <p className="member-role">UI/UX Designer</p>
                <p>Creating beautiful and functional interfaces that users love</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Michael Chen</h3>
                <p className="member-role">Product Manager</p>
                <p>Ensuring our product meets the needs of educational institutions</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Emily Rodriguez</h3>
                <p className="member-role">Education Specialist</p>
                <p>Bridging the gap between technology and educational needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Teacher Management?</h2>
            <p className="cta-text">Join thousands of educational institutions that trust our platform to manage their faculty efficiently</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer">
          <p>© 2023 Teacher Management System. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};