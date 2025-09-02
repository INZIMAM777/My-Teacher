export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <style>
        {`
          /* Contact Page Styles */
          .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          /* Header Section */
          .contact-header {
            text-align: center;
            margin-bottom: 60px;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            border-radius: 16px;
            color: white;
            box-shadow: 0 10px 30px rgba(67, 97, 238, 0.15);
          }
          
          .contact-header h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            letter-spacing: -0.5px;
          }
          
          .contact-header p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
          }
          
          /* Contact Content */
          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            margin-bottom: 80px;
          }
          
          @media (max-width: 900px) {
            .contact-content {
              grid-template-columns: 1fr;
            }
          }
          
          /* Contact Form */
          .contact-form {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }
          
          .form-title {
            font-size: 2rem;
            margin-bottom: 30px;
            color: var(--dark);
            position: relative;
          }
          
          .form-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: var(--primary);
            margin-top: 15px;
            border-radius: 2px;
          }
          
          .form-group {
            margin-bottom: 25px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
          }
          
          .form-input,
          .form-textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
          }
          
          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
          }
          
          .form-textarea {
            min-height: 150px;
            resize: vertical;
          }
          
          .submit-btn {
            background: var(--primary);
            color: white;
            padding: 15px 35px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
            display: inline-block;
          }
          
          .submit-btn:hover {
            background: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
          }
          
          /* Contact Info */
          .contact-info {
            padding: 20px 0;
          }
          
          .info-title {
            font-size: 2rem;
            margin-bottom: 30px;
            color: var(--dark);
            position: relative;
          }
          
          .info-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: var(--primary);
            margin-top: 15px;
            border-radius: 2px;
          }
          
          .info-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
          }
          
          .info-icon {
            width: 50px;
            height: 50px;
            background: rgba(67, 97, 238, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: var(--primary);
            margin-right: 20px;
            flex-shrink: 0;
          }
          
          .info-content h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: var(--dark);
          }
          
          .info-content p {
            color: var(--gray);
            line-height: 1.6;
          }
          
          /* Map Section */
          .map-section {
            margin-bottom: 80px;
          }
          
          .map-container {
            height: 400px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }
          
          .map-placeholder {
            height: 100%;
            background: var(--light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            font-weight: 600;
          }
          
          /* FAQ Section */
          .faq-section {
            margin-bottom: 80px;
          }
          
          .faq-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: var(--dark);
            position: relative;
          }
          
          .faq-title:after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: var(--primary);
            margin: 15px auto;
            border-radius: 2px;
          }
          
          .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          
          .faq-item {
            background: white;
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }
          
          .faq-item h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: var(--dark);
          }
          
          .faq-item p {
            color: var(--gray);
            line-height: 1.6;
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .contact-header h1 {
              font-size: 2.5rem;
            }
            
            .form-title,
            .info-title {
              font-size: 1.8rem;
            }
            
            .faq-title {
              font-size: 2rem;
            }
            
            .contact-form {
              padding: 25px;
            }
          }
        `}
      </style>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions or need support? We're here to help you with your teacher management needs</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder="Your email address" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input" 
                  placeholder="What is this regarding?" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  className="form-textarea" 
                  placeholder="How can we help you?" 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>support@teachermanagement.com<br />info@teachermanagement.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567 (Sales)<br />+1 (555) 987-6543 (Support)</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>123 Education Avenue<br />Tech City, TC 12345<br />United States</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="map-section">
          <h2 className="section-title">Our Location</h2>
          <div className="map-container">
            <div className="map-placeholder">
              Interactive Map Would Appear Here
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I get started with the system?</h3>
              <p>You can sign up for a free trial on our website. After registration, you'll receive a welcome email with setup instructions.</p>
            </div>
            
            <div className="faq-item">
              <h3>What support options are available?</h3>
              <p>We offer email support, live chat during business hours, and comprehensive documentation for all users.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I import existing teacher data?</h3>
              <p>Yes, our system supports CSV imports to help you migrate existing teacher information quickly.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is there mobile access available?</h3>
              <p>Yes, our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android.</p>
            </div>
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