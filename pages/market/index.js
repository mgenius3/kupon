import Layout from '../../components/Layout';
import Link from 'next/link';
import $ from 'jquery';
import React, { Fragment, useEffect, useState } from 'react';
// import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/store';
import Spinner from 'react-bootstrap/Spinner';

export default function Home() {
  const [shuffleData, setShuffleData] = useState();
  // const [token, setToken] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     return localStorage.getItem('token');
  //   }
  // });
  const dispatch = useDispatch();
  let { data, isLoading } = useSelector((state) => state);

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
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      // Shuffle the array using the Fisher-Yates algorithm
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }

      // Get the first six items using slice method
      data = data.slice(0, 6);
      setShuffleData(data);
    }
  }, [data]);

  console.log(shuffleData);
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

  return (
    <Fragment>
      <Layout title="Home Page - Market">
        {/* {/*<!--Body Content-->*/}
        <div id="page-content">
          {/* {/*<!--Home slider-->*/}
          <div className="slideshow slideshow-wrapper pb-section sliderFull">
            <Slider className="home-slideshow">
              <div className="slide">
                <div className="blur-up lazyload bg-size">
                  <img
                    className="blur-up lazyload bg-img"
                    dataSrc="/images/slideshow-banners/cart.jpg"
                    src="/images/slideshow-banners/cart.jpg"
                    alt="Summer Bikini Collection"
                    title="Summer Bikini Collection"
                    style={{
                      width: '100%',
                      height: '60vh!important',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content bottom">
                      <div className="wrap-caption center">
                        <h2 className="h1 mega-title slideshow__title">
                          <b style={{ color: '#e60000' }}>Kupon</b> Online
                          <b> Marketplace</b>
                        </h2>
                        <span className="mega-subtitle slideshow__subtitle">
                          If you&apos;re looking for a platform to sell your
                          products online, consider listing them on Kupon
                          Marketplace
                        </span>
                        <Link href="/market/sell">
                          <span className="btn">Sell Now</span>
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
                    src="/images/slideshow-banners/carts.jpg"
                    alt="Summer Bikini Collection"
                    title="Summer Bikini Collection"
                    style={{
                      width: '100%',
                      height: '60vh!important',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content bottom">
                      <div className="wrap-caption center">
                        <h2 className="h1 mega-title slideshow__title">
                          <b style={{ color: '#e60000' }}>Kupon</b> Online
                          <b> Marketplace</b>
                        </h2>
                        <span className="mega-subtitle slideshow__subtitle">
                          If you&apos;re looking for a platform to buy products
                          online, kupon is your best option
                        </span>
                        <Link href="/market/shop">
                          <span className="btn">Buy Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/*<!--Featured Product-->*/}
          <div className="product-rows section">
            <div className="container">
              <div className="row">
                <div
                  className="col-12 col-sm-12 col-md-12 col-lg-12"
                  id="marketcollection"
                >
                  <div className="section-header text-center">
                    <h2 className="h2">Featured collection</h2>
                    <p>Our most popular products based on sales</p>
                  </div>
                </div>
                <div className="grid-products container">
                  <div className="row">
                    {isLoading ? (
                      <div className="section text-center col-12">
                        <Spinner
                          animation="grow"
                          role="status"
                          variant="danger"
                        >
                          <span className="text-center">Loading...</span>
                        </Spinner>
                      </div>
                    ) : shuffleData?.length ? (
                      shuffleData?.map((product, i) => (
                        <Link href={`/market/shop/${product?.id}`} key={i}>
                          <div
                            className="col-12 col-sm-12 col-md-4 col-lg-4 item grid-view-item style2"
                            key={i}
                          >
                            <div className="grid-view_image">
                              {/*<!-- start product image -->*/}
                              <div className="grid-view-item__link">
                                {/*<!-- image -->*/}
                                <img
                                  className="grid-view-item__image primary blur-up lazyload"
                                  dataSrc={`data:image/png;base64,${
                                    JSON.parse(product?.files)[0]
                                  }`}
                                  src={`data:image/png;base64,${
                                    JSON.parse(product?.files)[0]
                                  }`}
                                  alt="image"
                                  title="product"
                                  style={{ height: '250px' }}
                                />
                                {/*<!-- End image -->*/}
                                {/*<!-- Hover image -->*/}
                                <img
                                  className="grid-view-item__image hover blur-up lazyload"
                                  dataSrc={`data:image/png;base64,${
                                    JSON.parse(product.files)[1]
                                      ? JSON.parse(product.files)[1]
                                      : JSON.parse(product.files)[0]
                                  }`}
                                  src={`data:image/png;base64,${
                                    JSON.parse(product.files)[1]
                                      ? JSON.parse(product.files)[1]
                                      : JSON.parse(product.files)[0]
                                  }`}
                                  alt="image"
                                  title="product"
                                  style={{ height: '250px' }}
                                />

                                <div className="product-labels rectangular">
                                  <span className="lbl on-sale">
                                    {product?.category}
                                  </span>{' '}
                                  <span className="lbl pr-label1">
                                    {product?.conditions}
                                  </span>
                                </div>
                                {/*<!-- End product label -->*/}
                              </div>
                              {/*<!-- end product image -->*/}
                              {/*<!--start product details -->*/}
                              <div className="product-details text-center mobile">
                                {/*<!-- product name -->*/}
                                <div className="product-name">
                                  <a>{product?.title}</a>
                                </div>
                                {/*<!-- End product name -->*/}
                                {/*<!-- product price -->*/}
                                <div className="">
                                  <span className="">
                                    &#8358;{product?.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="section text-center col-12 d-flex justify-content-center">
                        <span className="text-center mx-5 text-lg">
                          <b>NO COLLECTION</b>
                        </span>
                      </div>
                    )}
                  </div>
                  {shuffleData?.length ? (
                    <div className="text-right">
                      <Link href="market/shop">
                        <button className="btn">MORE</button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/*<!--End Featured Product-->*/}
        </div>
        {/* {/*<!--End Body Content-->*/}
      </Layout>
    </Fragment>
  );
}
