import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className="footer-links-heading">Social Links</p>
              <ul>
                <li>
                  <a href="https://www.facebook.com/people/PARK-2-JET/61561781165668/">
                    facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/park-2-jet-airport-parking/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/park2jet_/">Instagram</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="footer-links-heading">Other Links</p>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cancellation & Refund</li>
                <li>Policy</li>
                <li>Legal Notice</li>
                <li>Disclaimer</li>
                <li>Payment policy</li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="footer-links-heading">Contact Info</p>
              <ul>
                <li>18121 E 81st Ave</li>
                <li>Commerce City, CO 80022</li>
                <li> 303-558-9790</li>
                <li>service&#64;park2jetdenver.com</li>
                <li>© 2024 Park2JetDenver All Rights Reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
