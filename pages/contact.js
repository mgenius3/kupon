import Link from "next/link";
import Layout from "../components/Layout";
// import Link from 'next/link';
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitPackageMessage = async () => {
    setIsLoading(true);
    try {
      console.log(data);
      const response = await fetch("/reach/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const res = await response.json();
        setIsLoading(false);
        throw new Error(res.msg);
      }
      const res = await response.json();
      setIsLoading(false);
      toast.success(res.msg);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <Fragment>
      <Layout title="Contact Us - Landing">
        <div id="page-content">
          <div
            className="page section-header text-center"
            style={{ margin: "60px 0px" }}
          >
            <div className="page-title">
              <div className="wrapper">
                <h1 className="page-width">Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
              <Link href="/home" title="Back to the home page">
                Home
              </Link>
              <span aria-hidden="true">›</span>
              <span>Contact Us</span>
            </div>
          </div>{" "}
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-4">
                <h2>Drop Us A Line</h2>
                <p>
                  You can reach us through a telephone call or send message
                  below{" "}
                </p>
                <div className="formFeilds contact-form form-vertical">
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="ContactFormName"
                            name="fullName"
                            placeholder="Name"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="ContactFormEmail"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            required
                            type="tel"
                            id="ContactFormPhone"
                            name="telephone"
                            pattern="[0-9\-]*"
                            placeholder="Phone Number"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea
                            required=""
                            rows="10"
                            id="ContactFormMessage"
                            name="message"
                            placeholder="Your Message"
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        {isLoading ? (
                          <input
                            type="submit"
                            className="btn"
                            value="loading ..."
                            disabled
                          />
                        ) : (
                          <input
                            type="submit"
                            className="btn"
                            value="Send Message"
                            onClick={submitPackageMessage}
                          />
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="open-hours">
                  <strong>Opening Hours</strong>
                  <br />
                  Mon - Sat : 9am - 11pm
                  <br />
                  Sunday: 11am - 5pm
                </div>
                <hr />
                <ul className="addressFooter">
                  <li>
                    <i className="icon anm anm-map-marker-al"></i>
                    <p>
                      No 2 Molarin Close Off Church Street
                      <br />
                      Akinogun Shagari estate, Ipaja
                    </p>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s"></i>
                    <Link href="tel:07033717055">
                      <p>07033717055</p>
                    </Link>
                    <Link href="tel:234 9117331396">
                      <p>09117331396</p>
                    </Link>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l"></i>

                    <p>
                      <Link href="/">kupon.com.ng</Link>
                    </p>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
          <div className="map-section map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.317667632887!2d3.2714609087494293!3d6.6073913933589905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b906179f7ba83%3A0x4c3a0614ae53045c!2sShagari%20estate%2C%201%20D%20B%20St%2C%20Ipaja%20100276%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1681830606409!5m2!1sen!2sus"
              height="350"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="container">
              <div className="row">
                <div className="map-section__overlay-wrapper">
                  <div className="map-section__overlay">
                    <h3 className="h4">Office Address</h3>
                    <div className="rte-setting">
                      <p>
                        No 2 Molarin Close Off Church Street
                        <br />
                        Akinogun Shagari estate, Ipaja
                        <br />
                        Lagos, Nigeria
                      </p>
                      <p>
                        Mon - Fri, 10am - 9pm
                        <br />
                        Saturday, 11am - 9pm
                        <br />
                        Sunday, 11am - 5pm
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://goo.gl/maps/ooiFmj8wnYo74ReP7"
                        className="btn btn--secondary btn--small"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get directions
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
