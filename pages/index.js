import Layout from "../components/Layout";
// import Link from "next/link";
import React, { Fragment } from "react";
// import 'slick-carousel/slick/slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-bootstrap";
// import styled from 'styled-components';

export default function Home() {
  return (
    <Fragment>
      <Layout title="Landing">
        <div id="index">
          <div className="d1">
            <h1>KUPON LOGISTICS AND MARKETPLACE FOR ALL.</h1>
            <p className="p1">
              &quot;Unite. Trade. Deliver. Experience our Marketplace and
              Logistics Platform, connecting businesses worldwide. Simplify
              transactions, streamline deliveries, and conquer new horizons.
              Join us today and shape the future of commerce and
              logistics!&quot;
            </p>

            <div className="d1">
              <span>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/sf-regular/48/FFFFFF/mac-os.png"
                  alt="mac-os"
                />{" "}
                <p>
                  <em>Get on Iphone</em>
                </p>
              </span>
              <span>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/google-play.png"
                  alt="google-play"
                />{" "}
                <p>
                  <em> Get on Android</em>
                </p>
              </span>
            </div>
          </div>
          <div className="d2">
            <Carousel controls={false}>
              <Carousel.Item interval={2500}>
                <img src="/images/trucks.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/cart.png" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
