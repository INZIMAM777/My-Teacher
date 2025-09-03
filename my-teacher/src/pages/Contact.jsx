import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Form submission logic would go here
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            --error-color: #cf6679;
            --success-color: #00c853;
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
          
          .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          /* Header Section */
          .contact-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 20px;
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #2d2d2d 100%);
            border-radius: 16px;
            color: var(--text-light);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
          }
          
          .contact-header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
            color: var(--accent-teal);
          }
          
          .contact-header p {
            font-size: 1.1rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
            line-height: 1.6;
          }
          
          /* Contact Content */
          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 40px 0;
          }
          
          /* Contact Form */
          .contact-form {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border-color);
          }
          
          .form-title {
            font-size: 1.8rem;
            margin-bottom: 25px;
            color: var(--accent-teal);
            position: relative;
          }
          
          .form-title:after {
            content: '';
            display: block;
            width: 50px;
            height: 4px;
            background: var(--accent-purple);
            margin-top: 12px;
            border-radius: 2px;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-light);
          }
          
          .form-input,
          .form-textarea {
            width: 100%;
            padding: 14px 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
            color: var(--text-light);
          }
          
          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            border-color: var(--accent-purple);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.1);
          }
          
          .form-input-error {
            border-color: var(--error-color);
          }
          
          .form-input-error:focus {
            border-color: var(--error-color);
            box-shadow: 0 0 0 3px rgba(207, 102, 121, 0.1);
          }
          
          .error-message {
            color: var(--error-color);
            font-size: 0.875rem;
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .form-textarea {
            min-height: 150px;
            resize: vertical;
          }
          
          .submit-btn {
            background: var(--accent-purple);
            color: var(--primary-dark);
            padding: 14px 32px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          
          .submit-btn:hover:not(:disabled) {
            background: var(--accent-teal);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(3, 218, 198, 0.4);
          }
          
          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(187, 134, 252, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-dark);
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .form-message {
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .form-message-success {
            background-color: rgba(0, 200, 83, 0.1);
            color: var(--success-color);
            border: 1px solid rgba(0, 200, 83, 0.3);
          }
          
          .form-message-error {
            background-color: rgba(207, 102, 121, 0.1);
            color: var(--error-color);
            border: 1px solid rgba(207, 102, 121, 0.3);
          }
          
          /* Contact Info */
          .contact-info {
            padding: 20px 0;
          }
          
          .info-title {
            font-size: 1.8rem;
            margin-bottom: 25px;
            color: var(--accent-teal);
            position: relative;
          }
          
          .info-title:after {
            content: '';
            display: block;
            width: 50px;
            height: 4px;
            background: var(--accent-purple);
            margin-top: 12px;
            border-radius: 2px;
          }
          
          .info-item {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            margin-bottom: 16px;
            border: 1px solid var(--border-color);
            display: flex;
            align-items: flex-start;
          }
          
          .info-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-purple);
          }
          
          .info-icon {
            width: 50px;
            height: 50px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: var(--accent-purple);
            margin-right: 16px;
            flex-shrink: 0;
            border: 1px solid rgba(187, 134, 252, 0.2);
          }
          
          .info-content h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: var(--text-light);
          }
          
          .info-content p {
            color: var(--text-secondary);
            line-height: 1.6;
          }
          
          .info-content a {
            color: var(--accent-teal);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .info-content a:hover {
            color: var(--accent-purple);
            text-decoration: underline;
          }
          
          /* Map Section */
          .map-section {
            margin: 40px 0;
          }
          
          .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 30px;
            color: var(--accent-teal);
            position: relative;
          }
          
          .section-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: var(--accent-purple);
            margin: 12px auto;
            border-radius: 2px;
          }
          
          .map-container {
            height: 350px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border-color);
          }
          
          .map-placeholder {
            height: 100%;
            background: linear-gradient(45deg, var(--secondary-dark) 25%, transparent 25%, transparent 75%, var(--secondary-dark) 75%, var(--secondary-dark)),
                        linear-gradient(45deg, var(--secondary-dark) 25%, transparent 25%, transparent 75%, var(--secondary-dark) 75%, var(--secondary-dark));
            background-size: 20px 20px;
            background-position: 0 0, 10px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            font-weight: 600;
            flex-direction: column;
            padding: 20px;
            text-align: center;
          }
          
          .map-placeholder::before {
            content: '📍';
            font-size: 2.5rem;
            margin-bottom: 16px;
            color: var(--accent-teal);
          }
          
          /* FAQ Section */
          .faq-section {
            margin: 40px 0;
          }
          
          .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
          
          .faq-item {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
          }
          
          .faq-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-purple);
          }
          
          .faq-item h3 {
            font-size: 1.2rem;
            margin-bottom: 12px;
            color: var(--text-light);
          }
          
          .faq-item p {
            color: var(--text-secondary);
            line-height: 1.6;
          }
          
          /* Support Team Section */
          .support-team {
            margin: 40px 0;
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
          
          .team-member {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            text-align: center;
            border: 1px solid var(--border-color);
          }
          
          .team-member:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-teal);
          }
          
          .member-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            filter: grayscale(30%);
          }
          
          .member-info {
            padding: 20px;
          }
          
          .member-name {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: var(--accent-teal);
          }
          
          .member-role {
            color: var(--accent-purple);
            margin-bottom: 12px;
            font-weight: 500;
          }
          
          .member-info > p {
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.6;
          }
          
          .member-contact {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .member-contact a {
            color: var(--accent-teal);
            text-decoration: none;
            display: block;
            margin-bottom: 6px;
            transition: color 0.3s ease;
            font-size: 0.9rem;
          }
          
          .member-contact a:hover {
            color: var(--accent-purple);
            text-decoration: underline;
          }
          
          /* CTA Section */
          .cta-section {
            background: linear-gradient(145deg, var(--secondary-dark) 0%, #252525 100%);
            padding: 50px 20px;
            border-radius: 16px;
            text-align: center;
            margin: 40px 0;
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
            margin-bottom: 25px;
            opacity: 0.9;
            line-height: 1.6;
          }
          
          .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cta-button {
            display: inline-block;
            background: var(--accent-purple);
            color: var(--primary-dark);
            padding: 14px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
          }
          
          .cta-button.outline {
            background: transparent;
            color: var(--accent-teal);
            border: 2px solid var(--accent-teal);
          }
          
          .cta-button:hover {
            background: var(--accent-teal);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(3, 218, 198, 0.4);
          }
          
          .cta-button.outline:hover {
            background: var(--accent-teal);
            color: var(--primary-dark);
          }
          
          /* Footer */
          .contact-footer {
            text-align: center;
            padding: 30px 0;
            color: var(--text-secondary);
            border-top: 1px solid var(--border-color);
          }
          
          /* Enhanced Mobile Responsiveness */
          @media (max-width: 1024px) {
            .contact-content {
              gap: 24px;
            }
            
            .contact-form,
            .contact-info {
              padding: 20px;
            }
            
            .form-title,
            .info-title {
              font-size: 1.6rem;
            }
            
            .section-title {
              font-size: 1.8rem;
            }
          }
          
          @media (max-width: 900px) {
            .contact-content {
              grid-template-columns: 1fr;
            }
            
            .contact-header {
              padding: 24px 16px;
              margin-bottom: 32px;
            }
            
            .contact-header h1 {
              font-size: 2rem;
            }
            
            .contact-header p {
              font-size: 1rem;
            }
          }
          
          @media (max-width: 768px) {
            .contact-container {
              padding: 16px;
            }
            
            .contact-header h1 {
              font-size: 1.8rem;
            }
            
            .form-title,
            .info-title,
            .section-title,
            .cta-title {
              font-size: 1.5rem;
            }
            
            .info-item {
              flex-direction: column;
              text-align: center;
              padding: 16px;
            }
            
            .info-icon {
              margin-right: 0;
              margin-bottom: 12px;
            }
            
            .map-container {
              height: 300px;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .cta-button {
              width: 100%;
              text-align: center;
            }
            
            .team-grid,
            .faq-grid {
              grid-template-columns: 1fr;
            }
          }
          
          @media (max-width: 480px) {
            .contact-header h1 {
              font-size: 1.6rem;
            }
            
            .form-title,
            .info-title,
            .section-title,
            .cta-title {
              font-size: 1.3rem;
            }
            
            .contact-form,
            .contact-info {
              padding: 16px;
            }
            
            .form-input,
            .form-textarea {
              padding: 12px 14px;
              font-size: 16px; /* Prevents zoom on iOS */
            }
            
            .submit-btn {
              width: 100%;
              justify-content: center;
            }
            
            .info-item {
              padding: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            
            .info-icon {
              width: 40px;
              height: 40px;
              font-size: 16px;
            }
            
            .map-container {
              height: 250px;
            }
            
            .member-img {
              height: 180px;
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
          }
          
          /* Extra small devices */
          @media (max-width: 360px) {
            .contact-container {
              padding: 12px;
            }
            
            .contact-header {
              padding: 20px 12px;
            }
            
            .contact-header h1 {
              font-size: 1.4rem;
            }
            
            .form-title,
            .info-title,
            .section-title,
            .cta-title {
              font-size: 1.2rem;
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
          
          .info-item,
          .faq-item,
          .team-member {
            animation: fadeInUp 0.6s ease forwards;
          }
          
          /* Improved touch targets for mobile */
          @media (hover: none) {
            .info-item:hover,
            .faq-item:hover,
            .team-member:hover {
              transform: none;
            }
            
            .submit-btn,
            .cta-button {
              min-height: 48px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .info-item,
            .faq-item,
            .team-member {
              animation: none;
            }
            
            .info-item:hover,
            .faq-item:hover,
            .team-member:hover,
            .submit-btn:hover,
            .cta-button:hover {
              transform: none;
              transition: none;
            }
            
            .loading-spinner {
              animation: none;
              border: 3px solid var(--primary-dark);
              border-top-color: transparent;
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
                  name="name"
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="error-message">
                    <span>⚠</span>
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="error-message">
                    <span>⚠</span>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && (
                  <div className="error-message">
                    <span>⚠</span>
                    {errors.subject}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <div className="error-message">
                    <span>⚠</span>
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message form-message-success">
                  <span>✅</span>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message form-message-error">
                  <span>❌</span>
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:support@teachermanagement.com">support@teachermanagement.com</a><br />
                  <a href="mailto:info@teachermanagement.com">info@teachermanagement.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a> (Sales)<br />
                  <a href="tel:+15559876543">+1 (555) 987-6543</a> (Support)
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>
                  123 Education Avenue<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
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
              <p style={{ fontSize: '0.9rem', marginTop: '10px', fontWeight: 'normal' }}>
                (Map integration would be implemented here)
              </p>
            </div>
          </div>
        </div>

        {/* Support Team Section */}
        <div className="support-team">
          <h2 className="section-title">Our Support Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Support Team Member"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Alex Johnson</h3>
                <p className="member-role">Support Specialist</p>
                <p>Expert in system setup and teacher onboarding</p>
                <div className="member-contact">
                  <a href="mailto:alex@teachermanagement.com">alex@teachermanagement.com</a>
                  <a href="tel:+15551234567">Ext. 102</a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Support Team Member"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Sarah Williams</h3>
                <p className="member-role">Technical Support</p>
                <p>Helps with technical issues and system troubleshooting</p>
                <div className="member-contact">
                  <a href="mailto:sarah@teachermanagement.com">sarah@teachermanagement.com</a>
                  <a href="tel:+15551234567">Ext. 104</a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Support Team Member"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Michael Chen</h3>
                <p className="member-role">Account Manager</p>
                <p>Assists with billing, upgrades, and account management</p>
                <div className="member-contact">
                  <a href="mailto:michael@teachermanagement.com">michael@teachermanagement.com</a>
                  <a href="tel:+15551234567">Ext. 106</a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Support Team Member"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="member-name">Emily Rodriguez</h3>
                <p className="member-role">Training Specialist</p>
                <p>Provides training and documentation for new features</p>
                <div className="member-contact">
                  <a href="mailto:emily@teachermanagement.com">emily@teachermanagement.com</a>
                  <a href="tel:+15551234567">Ext. 108</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I get started with the system?</h3>
              <p>You can sign up for a free trial on our website. After registration, you'll receive a welcome email with setup instructions and access to our onboarding resources.</p>
            </div>

            <div className="faq-item">
              <h3>What support options are available?</h3>
              <p>We offer email support, live chat during business hours, phone support for urgent issues, and comprehensive documentation for all users. Premium plans include dedicated account management.</p>
            </div>

            <div className="faq-item">
              <h3>Can I import existing teacher data?</h3>
              <p>Yes, our system supports CSV imports to help you migrate existing teacher information quickly. We also provide templates to format your data correctly for import.</p>
            </div>

            <div className="faq-item">
              <h3>Is there mobile access available?</h3>
              <p>Yes, our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android that allow teachers to update their availability on the go.</p>
            </div>

            <div className="faq-item">
              <h3>How secure is my data?</h3>
              <p>We take security seriously. All data is encrypted in transit and at rest. We undergo regular security audits and comply with industry standards for data protection.</p>
            </div>

            <div className="faq-item">
              <h3>Can I integrate with other systems?</h3>
              <p>Yes, we offer API access for enterprise plans and have pre-built integrations with popular student information systems and calendar applications.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">Join thousands of educational institutions that trust our platform to manage their faculty efficiently</p>
            <div className="cta-buttons">
              <button className="cta-button">Start Free Trial</button>
              <button className="cta-button outline">Schedule a Demo</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <p>© 2023 Teacher Management System. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};