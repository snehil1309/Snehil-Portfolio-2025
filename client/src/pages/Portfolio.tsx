import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    // Initialize animations when component mounts
    const script = document.createElement('script');
    script.src = '/src/scripts/portfolio.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <span className="brand-text">Snehil Pallav Sinha</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">
                <span className="typing-text">Hi, I'm Snehil Pallav Sinha</span>
              </h1>
              <h2 className="hero-subtitle fade-in-up">Frontend Developer</h2>
              <p className="hero-description fade-in-up">
                Passionate about creating responsive and user-friendly web applications using Angular, HTML, CSS, JavaScript, and Bootstrap.
              </p>
              <div className="hero-buttons fade-in-up">
                <a href="#contact" className="btn btn-primary btn-lg me-3">Get In Touch</a>
                <a href="#about" className="btn btn-outline-light btn-lg">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="about-content">
                <h3 className="about-subtitle">Frontend Developer</h3>
                <p className="about-text">
                  I'm a dedicated Frontend Developer currently working at Topia Technology in Vadodara, Gujarat. 
                  With expertise in modern web technologies including Angular, HTML, CSS, JavaScript, and Bootstrap, 
                  I specialize in creating responsive and scalable web applications.
                </p>
                <p className="about-text">
                  My journey in web development spans across various industries, from healthcare technology 
                  to expense management systems. I'm passionate about delivering high-quality solutions 
                  that enhance user experience and operational efficiency.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <h4>2+</h4>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h4>10+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h4>3</h4>
                    <p>Companies Worked</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <div className="image-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Work Experience</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>Web Developer</h3>
                    <span className="company">Topia Technology</span>
                    <span className="duration">Dec 2024 - Present</span>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li>Designed and developed responsive websites using HTML, CSS, Bootstrap, and JavaScript</li>
                      <li>Worked extensively with Angular to create dynamic and scalable web applications</li>
                      <li>Successfully launched company website www.smag-ai.com</li>
                      <li>Collaborated with marketing team to design web assets and digital solutions</li>
                      <li>Contributing to in-house project management software development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>Frontend Developer Trainee</h3>
                    <span className="company">Welspun Transformation Limited</span>
                    <span className="duration">Mar 2024 - Present</span>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li>Sole Frontend Developer for Expense Management project</li>
                      <li>Utilized Angular versions 14, 15, and 16 with TypeScript</li>
                      <li>Integrated APIs and managed API calls and functions</li>
                      <li>Worked on Sample Management and Compliance Management projects</li>
                      <li>Gained expertise in Azure and agile methodologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>Web Developer</h3>
                    <span className="company">PRASANSA Foundation</span>
                    <span className="duration">Jan 2022 - Feb 2024</span>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li>Created and maintained content for foundation's website</li>
                      <li>Updated website to reflect ongoing projects</li>
                      <li>Gained proficiency in HTML, CSS, and Bootstrap</li>
                      <li>Experience with design tools like Photoshop and Adobe Illustrator</li>
                      <li>Successfully managed website for NGO with multiple projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Technical Skills</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML5</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="95"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">CSS3</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="85"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Angular</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="80"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Bootstrap</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Azure</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="70"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="tech-icons">
                <div className="tech-icon">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="tech-icon">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
                <div className="tech-icon">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="tech-icon">
                  <i className="fab fa-angular"></i>
                  <span>Angular</span>
                </div>
                <div className="tech-icon">
                  <i className="fab fa-bootstrap"></i>
                  <span>Bootstrap</span>
                </div>
                <div className="tech-icon">
                  <i className="fab fa-microsoft"></i>
                  <span>Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-divider"></div>
              <p className="section-description">
                I'm always interested in new opportunities and collaborations. Let's connect!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>pallavsnehil@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91 9106804063</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Sama, Vadodara, Gujarat</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-details">
                    <h4>LinkedIn</h4>
                    <p>
                      <a href="https://linkedin.com/in/snehil-sinha-1a22777b" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/snehil-sinha-1a22777b
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="contact-form" id="contactForm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                  <div className="invalid-feedback">Please provide a valid name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                  <div className="invalid-feedback">Please provide a valid email.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" required />
                  <div className="invalid-feedback">Please provide a subject.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={5} required></textarea>
                  <div className="invalid-feedback">Please provide a message.</div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>&copy; 2025 Snehil Pallav Sinha. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
