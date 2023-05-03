import Layout from '../components/Layout';
import Link from 'next/link';
import React, { Fragment } from 'react';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-bootstrap';

export default function Home() {
  return (
    <Fragment>
      <Layout title="About Us - Landing">
        {/* {/*<!--Body Content-->*/}
        <div id="page-content">
          <div className="slideshow slideshow-wrapper pb-section sliderFull">
            <Carousel>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  dataSrc="/images/slideshow-banners/trucks.jpg"
                  src="/images/slideshow-banners/trucks.jpg"
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
                  alt="kupon"
                  title="kupon"
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
              About US
            </h2>
            <div>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                }}
              >
                Kupon is a leading provider of logistics and ecommerce services
                for businesses of all sizes. Founded in [year], our company has
                established a reputation for excellence in the industry by
                delivering reliable and cost-effective solutions that help our
                clients grow and succeed. Kupon is a logistics and online
                ecommerce website that offers a wide range of products and
                services to customers.
              </p>
              <br />{' '}
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                }}
              >
                The website provides a seamless and convenient shopping
                experience, allowing customers to easily browse and purchase
                products online from the comfort of their own home. Kupon is
                dedicated to providing the highest quality products at
                affordable prices, making it an ideal choice for customers
                looking for a great deal.
              </p>
              <br />
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                }}
              >
                The website features a wide range of products, including
                electronics, clothing, accessories, and more. In addition to its
                ecommerce offerings, Kupon also provides logistics services to
                businesses, helping them to manage their supply chain and
                streamline their operations.{' '}
              </p>
              <br />
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                }}
              >
                The website&apos;s logistics services include transportation,
                warehousing, and inventory management, among others.
                Kupon&apos;s commitment to customer satisfaction is evident in
                its user-friendly website design and excellent customer service.
              </p>{' '}
              <br />
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                }}
              >
                Customers can easily track their orders and receive updates on
                the status of their shipments, ensuring that they always know
                where their products are and when they will arrive. Overall,
                Kupon is a one-stop-shop for all your ecommerce and logistics
                needs. With its wide range of products, affordable prices, and
                exceptional customer service, Kupon is an excellent choice for
                anyone looking for a reliable and convenient online shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
