import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Nav from "./nav/Nav";
import MainNav from "./mainNav/Nav";
import MarketNav from "./marketNav/Nav";
import Footer from "./Footer";
import { Fragment } from "react";
export default function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title ? title + " - Kupon" : "Kupon"}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="Welcome to Kupon, your one-stop logistics and marketplace solution! We are a cutting-edge platform that connects businesses and individuals with a seamless logistics network and a diverse marketplace, offering a wide range of products and services. Whether you're a small business owner, a supplier, or an individual consumer, we've got you covered"
        />
        <meta
          name="keywords"
          content="Logistics, Marketplace, Shipping, Delivery, E-commerce, Online Shopping, Suppliers, Sellers, Products, Services, Tracking, Secure, Reliable, Efficient, Convenience, Customer Support, Trust, Transparency, Data Privacy, Catalog, Shopping Experience, Community, Connectivity, kupon.com.ng"
        />
        <meta name="author" content="Kupon Logistics - MarketPlace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/kupon icon.png" />
        <link rel="icon" href="/images/kupon icon.png" />
      </Head>
      <ToastContainer position="bottom-center" />
      {title == "Login" ? null : title == "Register" ? null : title?.includes(
          "Landing"
        ) ? (
        <MainNav />
      ) : title?.includes("Market") ? (
        <MarketNav />
      ) : (
        <Nav />
      )}
      <div className="pageWrapper">{children}</div>
      {title == "Login" ? null : title == "Register" ? null : <Footer />}
    </Fragment>
  );
}
