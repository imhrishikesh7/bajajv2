import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className='gradient-bg-footer flex'>
    <footer className="footer_area section_padding_130_0">
      <div className="container-footer">
        <div className="row">
          {/* Single Widget */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              {/* Footer Logo */}
              <img src="./inverted-logo.svg" alt="" />
              <div className="footer-logo mb-3"></div>
              <p>Bajaj Electricals’ business portfolio spans Consumer Products (Appliances, Fans, Cookware) and Lighting Solutions (Consumer and Professional Lighting).</p>
              {/* Copywrite Text */}
              <div className="copywrite-text mb-5">
               </div>
              {/* Footer Social Area */}
              <div className="footer_social_area">
                <img src="./fb.svg" alt="" />
                <img src="./x.svg" alt="" />
                <img src="./insta.svg" alt="" />
                <img src="./yt.svg" alt="" />
                
              </div>
            </div>
          </div>
          {/* Single Widget */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title */}
              <h5 className="widget-title">About</h5>
              {/* Footer Menu */}
              <div className="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Sale</a></li>
                  <li><a href="#">Terms &amp; Policy</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Widget */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title */}
              <h5 className="widget-title">Support</h5>
              {/* Footer Menu */}
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help &amp; Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Widget */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title */}
              <h5 className="widget-title">Contact</h5>
              {/* Footer Menu */}
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Call Centre</a></li>
                  <li><a href="#">Email Us</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
