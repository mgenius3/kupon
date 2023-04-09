import Layout from '../components/Layout';
import Link from 'next/link';
import React, { Fragment } from 'react';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel, Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const TextContainer = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;
export default function Home() {
  return (
    <Fragment>
      <Layout title="Landing">
        {/* {/*<!--Body Content-->*/}
        <div id="page-content">
          {/* {/*<!--Home slider-->*/}
          <div className="slideshow slideshow-wrapper pb-section sliderFull">
            <Carousel>
              <Carousel.Item interval={4500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  dataSrc="/images/slideshow-banners/belle-banner1.jpg"
                  src="/images/slideshow-banners/belle-banner1.jpg"
                  alt="Shop Our New Collection"
                  title="Shop Our New Collection"
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
                    <Link href="/logistics">
                      <span className="btn">Send Package</span>
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={4500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  dataSrc="/images/slideshow-banners/cart.jpg"
                  src="/images/slideshow-banners/cart.jpg"
                  alt="Summer Bikini Collection"
                  title="Summer Bikini Collection"
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
                    <Link href="/market">
                      <span className="btn">Shop Now</span>
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <TextContainer>
            <Heading>About Us</Heading>
            <Paragraph>
              Kupon is a leading provider of logistics and ecommerce services
              for businesses of all sizes. Founded in [year], our company has
              established a reputation for excellence in the industry by
              delivering reliable and cost-effective solutions that help our
              clients grow and succeed.
            </Paragraph>
          </TextContainer>
          <br />
          <Container>
            <Row>
              <Col md={6} className="text-center text-md-left">
                <h1>Welcome to Kupon Logistics</h1>
                <p>
                  Our logistics services include transportation, warehousing,
                  inventory management, and distribution. We work with
                  businesses to optimize their supply chain operations, reduce
                  costs, and improve efficiency. By leveraging our extensive
                  network of carriers and warehouses, we can provide customized
                  solutions that meet the unique needs of each client.
                </p>
                <Link href="/logistics">
                  <Button variant="primary" className="my-4 ">
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
            </Row>
            <hr />
            <Row>
              <Col md={6} className="text-center text-md-left">
                <h1>Welcome to Kupon MarketPlace</h1>
                <p>
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
                  <Button variant="primary" className="my-4">
                    Get Started
                  </Button>
                </Link>
              </Col>
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
            </Row>
          </Container>
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
                    <li className="display-table-cell">
                      <i className="icon anm anm-dollar-sign-r"></i>
                      <h5>Money Guarantee</h5>
                      <span className="sub-text">
                        30 days money back guarantee
                      </span>
                    </li>
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
        </div>
        {/* {/*<!--End Body Content-->*/}
      </Layout>
    </Fragment>
  );
}
