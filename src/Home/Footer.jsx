import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Pankaj Classes</h2>
                    <p>Empowering students with quality offline education and personal guidance.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="quick-links">
                        <li style={{ listStyle: 'none' }}><a href="/">Home</a></li>
                        <li style={{ listStyle: 'none' }}><a href="/courses">Courses</a></li>
                        <li style={{ listStyle: 'none' }}><a href="/aboutus">About Us</a></li>
                        <li style={{ listStyle: 'none' }}><a href="/contactus">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>📍 <a 
                        href="https://www.google.com/maps/search/?api=1&query=215+Mahakali+Caves,+Andheri+East" 
                        rel="noopener noreferrer">
                        Mahakali Caves, Andheri E
                    </a></p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ pankajclasses@gmail.com</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Pankaj Classes. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;