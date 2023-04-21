import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="site-footer">
        <div className="container">
          {/* <!--Footer Links--> */}
          <div className="footer-top">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <h4 className="h4">Quick Link</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <h4 className="h4">Services</h4>
                <ul>
                  <li>
                    <Link href="/logistics">Logistics Services</Link>
                  </li>
                  <li>
                    <Link href="/market">Market</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <h4 className="h4">Customer Services</h4>
                <ul>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter">
                  <li>
                    <i className="icon anm anm-map-marker-al"></i>
                    <p>
                      No 2 Molarin Close Off Church Street
                      <br />
                      Akinogun Shagari estate, Ipaja
                      <br />
                      Lagos, Nigeria
                    </p>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s"> </i>
                    <Link href="tel:07033717055">
                      <p style={{ cursor: 'pointer' }}> 07033717055</p>
                    </Link>
                  </li>
                  <li>
                    <i className="icon anm anm-phone-s"> </i>
                    <Link href="tel:234 9117331396">
                      <p style={{ cursor: 'pointer' }}> 09117331396</p>
                    </Link>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l"> </i>
                    <Link href="mailto: kuponlogistics@gmail.com">
                      <p style={{ cursor: 'pointer' }}>
                        kuponlogistics@gmail.com
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--End Footer Links--> */}
          <hr />
          <div className="footer-bottom">
            <div className="row">
              {/* <!--Footer Copyright--> */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"></div>
              {/* <!--End Footer Copyright--> */}
              {/* <!--Footer Payment Icon--> */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                <ul className="payment-icons list--inline">
                  <li>
                    <i className="icon fa fa-cc-visa" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-cc-mastercard"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-cc-discover"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i className="icon fa fa-cc-paypal" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="icon fa fa-cc-amex" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-credit-card"
                      aria-hidden="true"
                    ></i>
                  </li>
                </ul>
              </div>
              {/* <!--End Footer Payment Icon--> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
