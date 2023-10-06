import React from 'react';
import logo from '../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import '../App.css';

const Footer = () => {
  var imgUrl = process.env.REACT_APP_IMGURL;
  
  return (
    <div style={{ backgroundColor: '#92BAF4', color: '#fff', }}>
      <div className='footer'>
        <Container>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <img src={logo} alt='Logo' className='footerLogo' title='System'/>
              <p className='footerContent'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <div className='footerIcons'>
                <ul className='footer-social-icons'>
                  <li><a href="https://www.facebook.com/" ><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/" ><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/" ><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.instagram.com/" ><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-8 col-sm-6'>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget ps-3">
                    <h3>Quick Links</h3>

                    <ul className="quick-links">
                      <li><a href="#null">Home </a></li>
                      <li><a href="#null">Latest Events </a></li>
                      <li><a href="#null">Popular Events </a></li>
                      <li><a href="https://apps.apple.com/in/app/tabyt-organizers/id1641348594" target={'_blank'}>Create An Event </a></li>
                      <li><a href="#null">Contact Us </a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h3 className='paddingLeft'>Contact Us</h3>

                    <div className="widget-newsletter-content">
                      <p className='paddingLeft'>support@testApp.com</p>
                    </div>

                     </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
