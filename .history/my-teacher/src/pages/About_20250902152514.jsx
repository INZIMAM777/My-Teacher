export const About = () => {
  return (
    <>
      <style>
        {`
          :root {
            --primary: #4361ee;
            --primary-light: #4895ef;
            --secondary: #3f37c9;
            --dark: #212529;
            --light: #f8f9fa;
            --gray: #6c757d;
            --light-gray: #e9ecef;
            --success: #4cc9f0;
            --danger: #f72585;
            --warning: #f8961e;
            --body-bg: #fafbff;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--body-bg);
          }
          
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          /* Header Section */
          .about-header {
            text-align: center;
            margin-bottom: 60px;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            border-radius: 16px;
            color: white;
            box-shadow: 0 10px 30px rgba(67, 97, 238, 0.15);
          }
          
          .about-header h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            letter-spacing: -0.5px;
          }
          
          .about-header p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
          }
          
          /* Features Section */
          .features-section {
            margin: 80px 0;
          }
          
          .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: var(--dark);
            position: relative;
          }
          
          .section-title:after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: var(--primary);
            margin: 15px auto;
            border-radius: 2px;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          
          .feature-card {
            background: white;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            text-align: center;
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
          }
          
          .feature-icon {
            width: 70px;
            height: 70px;
            background: rgba(67, 97, 238, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 30px;
            color: var(--primary);
          }
          
          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
          }
          
          /* Stats Section */
          .stats-section {
            background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
            padding: 80px 0;
            border-radius: 16px;
            color: white;
            margin: 80px 0;
            text-align: center;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .stat-item {
            padding: 20px;
          }
          
          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 10px;
          }
          
          .stat-label {
            font-size: 1.1rem;
            opacity: 0.9;
          }
          
          /* Team Section */
          .team-section {
            margin: 80px 0;
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }
          
          .team-member {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }
          
          .team-member:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
          }
          
          .member-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          
          .member-info {
            padding: 25px;
            text-align: center;
          }
          
          .member-name {
            font-size: 1.4rem;
            margin-bottom: 5px;
            color: var(--dark);
          }
          
          .member-role {
            color: var(--primary);
            margin-bottom: 15px;
            font-weight: 500;
          }
          
          /* CTA Section */
          .cta-section {
            background: var(--light);
            padding: 80px 0;
            border-radius: 16px;
            text-align: center;
            margin: 80px 0;
          }
          
          .cta-content {
            max-width: 700px;
            margin: 0 auto;
          }
          
          .cta-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--dark);
          }
          
          .cta-text {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: var(--gray);
          }
          
          .cta-button {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
          }
          
          .cta-button:hover {
            background: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
          }
          
          /* Footer */
          .about-footer {
            text-align: center;
            padding: 40px 0;
            color: var(--gray);
            border-top: 1px solid var(--light-gray);
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .about-header h1 {
              font-size: 2.5rem;
            }
            
            .section-title {
              font-size: 2rem;
            }
            
            .stat-number {
              font-size: 2.5rem;
            }
            
            .cta-title {
              font-size: 2rem;
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
              <div className="stat-number">2023</div>
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