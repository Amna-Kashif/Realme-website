import React from 'react';

function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <h5>Recommended</h5>
                    
                    <ul className="list-unstyled">
                        <li><a href="#">realme C75</a></li>
                        <li><a href="#">realme 13+ 5G</a></li>
                        <li><a href="#">realme Note 60</a></li>
                        <li><a href="#">realme C61</a></li>
                        <li><a href="#">realme 12</a></li>
                        <li><a href="#">realme 12+ 5G</a></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h5>Support</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Troubleshooting</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h5>About realme</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Our Brand</a></li>
                        <li><a href="#">Newsroom</a></li>
                    </ul>
                </div>


                <div className="col-md-2">
                    <h5>Contact realme</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.whatsapp.com/">Whatsapp</a></li>
                        <li><a href="https://www.realme.com/pk/">service.pk@realme.com</a></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h5>04238048018</h5>
                    <p className="text-secondary">09:30 - 18:00， MON - SAT
                        Exclude Holidays</p>
                        <div className="social-links">
                       <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook "></i></a>
                       <a href="https://www.meta.com/"><i className="fa-brands fa-twitter "></i></a>
                       <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube "></i></a>
                       <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram "></i></a>
                    </div>
                
                </div>
            </div>
            <hr className="text-secondary" />

            <p className="text-white">Pakistan ( English / PKR )    © 2019-2024 realme. All Rights Reserved.</p>

        </div>
    </footer>
    </>
  );
}

export default Footer;
