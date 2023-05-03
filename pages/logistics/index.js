import Layout from '../../components/Layout';
import Link from 'next/link';
import $ from 'jquery';
import React, { useEffect } from 'react';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

export default function Logistics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.addEventListener('scroll', handleScroll); // add scroll event listener on component mount
    }
    return () => {
      if (typeof window !== 'undefined') {
        window?.removeEventListener('scroll', handleScroll); // remove scroll event listener on component unmount
      }
    };
  }, []);

  useEffect(() => {
    homeSlider();
  }, []);
  function handleScroll() {
    if (typeof window !== 'undefined') {
      if (window?.innerWidth > 1199) {
        const headerWrap = $('.header-wrap');
        if (window?.pageYOffset > 145) {
          headerWrap.addClass('stickyNav animated fadeInDown');
        } else {
          headerWrap.removeClass('stickyNav fadeInDown');
        }
      }
    }
  }
  function homeSlider() {
    // $('.home-slideshow').slick({
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   fade: true,
    //   arrows: true,
    //   autoplay: true,
    //   autoplaySpeed: 4000,
    //   lazyLoad: 'ondemand',
    // });
  }
  return (
    <Layout title="Home Page">
      {/* {/*<!--Body Content-->*/}
      <div id="page-content">
        {/* <div className="slideshow slideshow-wrapper pb-section sliderFull">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="blur-up lazyload bg-img land-image-slider"
                dataSrc="/images/newtruck1.jpg"
                src="/images/newtruck1.jpg"
                alt="Kupon"
                title="Kupon"
                style={{ width: '100%' }}
              />
            
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="blur-up lazyload bg-img land-image-slider"
                dataSrc="/images/newtruck2.jpg"
                src="/images/newtruck2.jpg"
                alt="Kupon"
                title="Kupon"
                style={{ width: '100%' }}
              />
             
            </Carousel.Item>
          </Carousel>
        </div> */}

        <div style={{ margin: '100px 0px', marginBottom: '130px' }}>
          <Container>
            <Row>
              <Col md={8} className="align-items-center">
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    textAlign: 'left',
                  }}
                >
                  How to Use Our <b style={{ color: '#6e0000' }}>Logistics</b>{' '}
                  Platform
                </h2>
                <p>
                  Our logistics platform is designed to help you manage your
                  logistics operations efficiently and effectively. Here are the
                  steps to get started:
                </p>
                <ol className="list-steps">
                  <li>
                    <Link href="/register">Sign up for an account</Link> on our
                    website.
                  </li>
                  <li>
                    <Link href="#">Set up your profile and information.</Link>
                  </li>
                  <li>
                    <Link href="/logistics/send">
                      Click on the send package
                    </Link>{' '}
                    to take you to a page to send your item/goods
                  </li>
                  <li>
                    <Link href="/logistics/send">
                      Fill in the correct information
                    </Link>{' '}
                    and click proceed for payment
                  </li>
                  <li>
                    <Link href="/dashboard/user/logistics">
                      Go to your user logistics profile
                    </Link>{' '}
                    to track the status of item/goods sent
                  </li>
                  <li>
                    <Link href="tel: 234 7033717055">07033717055</Link> Place a
                    call to this number of live update on goods tracking
                  </li>
                </ol>
              </Col>
              <Col md={4}>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="blur-up lazyload bg-img land-image-slider"
                      dataSrc="/images/newtruck.jpg"
                      src="/images/newtruck.jpg"
                      alt="Kupon"
                      title="Kupon"
                      style={{
                        width: '100%',
                        height: '60vh!important',
                        objectFit: 'cover',
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img
                      className="blur-up lazyload bg-img land-image-slider"
                      dataSrc="/images/newtruck1.jpg"
                      src="/images/newtruck1.jpg"
                      alt="Kupon"
                      title="Kupon"
                      style={{
                        width: '100%',
                        height: '60vh!important',
                        objectFit: 'cover',
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>

        {/* {/*<!--Home slider-->*/}
        {/* <div className="slideshow slideshow-wrapper pb-section sliderFull">
          <Slider className="home-slideshow">
            <div className="slide">
              <div className="blur-up lazyload bg-size">
                <img
                  className="blur-up lazyload bg-img"
                  dataSrc="/images/slideshow-banners/belle-banner1.jpg"
                  src="/images/slideshow-banners/trucks.jpg"
                  alt="Shop Our New Collection"
                  title="Shop Our New Collection"
                />
                <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                  <div className="slideshow__text-content bottom">
                    <div className="wrap-caption center">
                      <h2 className="h1 mega-title slideshow__title">
                        <b style={{ color: '#e60000' }}>Kupon</b> Logistics
                        Company
                      </h2>
                      <span className="mega-subtitle slideshow__subtitle">
                        If you need to move goods across the country, consider
                        using Kupon Logistics Company
                      </span>
                      <Link href="/logistics/send">
                        <span className="btn">Send Package</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="blur-up lazyload bg-size">
                <img
                  className="blur-up lazyload bg-img"
                  dataSrc="/images/slideshow-banners/cart.jpg"
                  src="/images/slideshow-banners/belle-banner1.jpg"
                  alt="Summer Bikini Collection"
                  title="Summer Bikini Collection"
                />
                <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                  <div className="slideshow__text-content bottom">
                    <div className="wrap-caption center">
                      <h2 className="h1 mega-title slideshow__title">
                        <b style={{ color: '#e60000' }}>Kupon</b> Logistics
                        Company
                      </h2>
                      <span className=" slideshow__subtitle">
                        Whether you&apos;re shipping goods across the country or
                        around the world, ABC Logistics has the expertise,
                        experience, and resources to get the job done right.
                        Contact us today to learn how we can help your business
                        streamline its supply chain and improve its bottom line.
                      </span>
                      <Link href="/logistics/send">
                        <span className="btn">Send Package</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div> */}

        <Container>
          <Row>
            <Col md={6} className="text-center text-md-left">
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                Welcome to Kupon <b style={{ color: '#e60000' }}>Logistics</b>
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  textAlign: 'left',
                }}
              >
                Our logistics services include transportation, warehousing,
                inventory management, and distribution. We work with businesses
                to optimize their supply chain operations, reduce costs, and
                improve efficiency. By leveraging our extensive network of
                carriers and warehouses, we can provide customized solutions
                that meet the unique needs of each client.
              </p>
              <Link href="/logistics">
                <Button variant="primary" className="my-4 d-none d-lg-block">
                  Get Started
                </Button>
              </Link>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="/images/slideshow-banners/trucks.jpg"
                alt="placeholder"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              {' '}
              <Link href="/logistics/send">
                <Button variant="primary" className="my-4 d-lg-none">
                  Send Package
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      {/* {/*<!--End Body Content-->*/}
      <div className="store-feature section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="display-table store-info">
                <li className="display-table-cell">
                  <i className="icon anm anm-truck-l"></i>
                  <h5>Fast Shipping &amp; Return</h5>
                  <span className="sub-text">
                    Provision of Fast Delivery of Ordes
                  </span>
                </li>
                {/* <li className="display-table-cell">
                      <i className="icon anm anm-dollar-sign-r"></i>
                      <h5>Money Guarantee</h5>
                      <span className="sub-text">
                        30 days money back guarantee
                      </span>
                    </li> */}
                <li className="display-table-cell">
                  <i className="icon anm anm-comments-l"></i>
                  <h5>Online Support</h5>
                  <span className="sub-text">
                    We support online 24/7 on day
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-credit-card-front-r"></i>
                  <h5>Secure Payments</h5>
                  <span className="sub-text">
                    All payment are Secured and trusted.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--End Store Feature-->*/}
    </Layout>
  );
}
