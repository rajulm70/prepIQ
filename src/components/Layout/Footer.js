import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737660601/Screenshot_2025-01-24_005810_enhanced-removebg-preview_ytrzry.png" alt="logo" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum
                </p>
                <div className="hr"></div>
                <h6>Govind Dairy Hostel, Chaumua, Mathura.</h6>
                <h6>
                  +91 7355454472<span>|</span>+01 2345 6789 12
                </h6>
                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1737660601/Screenshot_2025-01-24_005810_enhanced-removebg-preview_ytrzry.png" alt="logo" /> All
          Rights Reserved.
        </p>
      </footer>

      <style jsx>{`
        img {
          max-width: 100%;
          height: auto;
        }
        section {
          padding: 60px 0;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .contact-area {
          border-bottom: 1px solid #282832;
        }
        .contact-content p {
          font-size: 15px;
          margin: 30px 0 60px;
          position: relative;
        }
        .contact-content p::after {
          background: #353c46;
          bottom: -30px;
          content: '';
          height: 1px;
          left: 50%;
          position: absolute;
          transform: translate(-50%);
          width: 80%;
        }
        .contact-content h6 {
          color: #8b9199;
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 10px;
        }
        .contact-content span {
          color: #353c47;
          margin: 0 10px;
        }
        .contact-social {
          margin-top: 30px;
        }
        .contact-social > ul {
          display: inline-flex;
        }
        .contact-social ul li a {
          border: 1px solid #8b9199;
          color: #8b9199;
          display: inline-block;
          height: 40px;
          margin: 0 10px;
          padding-top: 7px;
          transition: all 0.4s ease 0s;
          width: 40px;
        }
        .contact-social ul li a:hover {
          border: 1px solid #7D5D50;
          color:rgb(157, 120, 82);
        }
        .contact-content img {
          max-width: 210px;
        }
        section,
        footer {
          background: #282832;
          color: #868c96;
        }
        footer p {
          padding: 40px 0;
          text-align: center;
        }
        footer img {
          width: 44px;
        }
      `}</style>
    </>
  );
};

export default Footer;
