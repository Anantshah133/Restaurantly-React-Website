import React from 'react'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>Restaurantly</h3>
                                <p>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="/index.html" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="/index.html" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="/index.html" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="/index.html" className="google-plus"><i className="bi bi-google"></i></a>
                                    <a href="/index.html" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul className='p-0'>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Services</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Terms of service</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Marketing</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="index.html">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    © Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                     Designed by  
                    <a href="https://bootstrapmade.com/"> BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}
