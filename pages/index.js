import Layout from '../components/Layout';
import Link from 'next/link';
import React, { Fragment } from 'react';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel, Button, Col, Container, Row } from 'react-bootstrap';
// import styled from 'styled-components';

export default function Home() {
  return (
    <Fragment>
      <Layout title="Landing">
        <div id="page-content">
          <div
            className="slideshow slideshow-wrapper pb-section sliderFull"
            style={{ marginBottom: '50px' }}
          >
            <Carousel>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  dataSrc="/images/slideshow-banners/trucks.jpg"
                  src="/images/slideshow-banners/trucks.jpg"
                  alt="Kupon"
                  title="Kupon"
                  style={{
                    width: '100%',
                    height: '60vh!important',
                    objectFit: 'cover',
                  }}
                />
                <Carousel.Caption>
                  <div className="">
                    <h2 className="h1 mega-title slideshow__title">
                      <b style={{ color: '#e60000' }}>Kupon</b> Logistics
                      Company
                    </h2>
                    <span className="mega-subtitle slideshow__subtitle">
                      If you need to move goods across the country, consider
                      using Kupon Logistics Company
                    </span>
                    <Link href="/logistics/send">
                      <span className="btn">
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/send.png"
                          width={20}
                          className="mx-2"
                        />
                        Send Package
                      </span>
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  dataSrc="/images/slideshow-banners/cart.jpg"
                  src="/images/slideshow-banners/cart.jpg"
                  alt="Kupon"
                  title="Kupon"
                  style={{
                    width: '100%',
                    height: '60vh!important',
                    objectFit: 'cover',
                  }}
                />
                <Carousel.Caption>
                  <div className="">
                    <h2 className="h1 mega-title slideshow__title">
                      <b style={{ color: '#e60000' }}>Kupon </b> Online
                      <b> Marketplace</b>
                    </h2>
                    <span className="mega-subtitle slideshow__subtitle">
                      If you&apos;re looking for a platform to sell your
                      products online, consider listing them on Kupon
                      Marketplace
                    </span>
                    <Link href="/market/shop#marketcollection">
                      <span className="btn">
                        <img
                          src="https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png"
                          width={20}
                          className="mx-2"
                        />
                        Shop Now
                      </span>
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <Container>
            <Row style={{ marginBottom: '50px' }}>
              <Col md={6} className="text-left text-md-left">
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                  }}
                >
                  Welcome to Kupon{' '}
                  <b style={{ color: '#e60000' }}> Logistics</b>
                </h2>
                <p
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.5',
                  }}
                >
                  Our logistics services include transportation, warehousing,
                  inventory management, and distribution. We work with
                  businesses to optimize their supply chain operations, reduce
                  costs, and improve efficiency. By leveraging our extensive
                  network of carriers and warehouses, we can provide customized
                  solutions that meet the unique needs of each client.
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
                <Link href="/logistics">
                  <Button variant="primary" className="my-4 d-lg-none">
                    Get Started
                  </Button>
                </Link>
              </Col>
            </Row>
            <hr />
            <Row style={{ marginBottom: '50px' }}>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src="/images/slideshow-banners/cart.jpg"
                  alt="placeholder"
                  className="img-fluid"
                />
              </Col>
              <Col md={6} className="text-left text-md-left">
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                  }}
                >
                  Welcome to Kupon{' '}
                  <b style={{ color: '#e60000' }}>Marketplace</b>
                </h2>
                <p
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.5',
                  }}
                >
                  In addition to logistics services, we also offer a range of
                  ecommerce services, including website design, online
                  marketing, and payment processing. We understand the
                  challenges that businesses face in the online marketplace and
                  we have the expertise to help them succeed. Our team of
                  ecommerce specialists works closely with clients to develop
                  tailored strategies that drive traffic, increase conversions,
                  and maximize revenue.
                </p>
                <Link href="/market">
                  <Button variant="primary" className="my-4 d-none d-lg-block">
                    Get Started
                  </Button>
                </Link>
              </Col>

              <Col md={6}>
                <Link href="/market">
                  <Button variant="primary" className="my-4 d-lg-none">
                    Get Started
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{
                    backgroundColor: '#f8f8f8',
                    padding: '2rem',
                  }}
                  id="about"
                >
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                    }}
                  >
                    About Us
                  </h2>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.5',
                    }}
                  >
                    Kupon is a leading provider of logistics and ecommerce
                    services for businesses of all sizes. Founded in [year], our
                    company has established a reputation for excellence in the
                    industry by delivering reliable and cost-effective solutions
                    that help our clients grow and succeed.
                    <br />
                    <Link href="/about#about">
                      <small className="btn text-white">MORE...</small>
                    </Link>
                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src="/images/newtruck2.jpg"
                  alt="placeholder"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>

          <br />
        </div>
        {/* {/*<!--End Body Content-->*/}
      </Layout>
    </Fragment>
  );
}
