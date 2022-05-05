import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Ford.com <i>Bying car is easy </i> This is stock for car . Here , there are lots of car are available and it is easy to directly connect with with us . we are here to provide you service as your want .. please conctact with us . The way we are providing service to others is very diffrent way and clients are so happy .. alawys contact with us to get updated ...</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a >Car</a></li>
              <li><a>BMW</a></li>
              <li><a >Honda</a></li>
              <li><a >Ferrari</a></li>
              <li><a >Ford</a></li>
              <li><a >Nissan</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a >Home</a></li>
              <li><a>Blogs</a></li>
              <li><a >About</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Sitemap</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Ford Car</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>  
              
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    );
};

export default Footer;

