import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../store/store";
import { shortenString } from "../../../utils/stringManipulation";
import { getInitials } from "../../../utils/stringManipulation";
import jwtDecode from "jwt-decode";

export default function Shop() {
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [user, setUser] = useState({});
  // const [allData, setAllData] = useState([]);

  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // useEffect(() => {
  //   setAllData(data);
  // }, [currentPage]);

  useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const updatedCurrentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedCurrentItems);
  }, [data, currentPage, itemsPerPage, indexOfFirstItem, indexOfLastItem]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function searchData(name, e) {
    if (name == "name") {
      if (e == "" || e == "Other")
        setCurrentItems(() => data?.slice(indexOfFirstItem, indexOfLastItem));
      else {
        setCurrentItems(
          data.filter((product) =>
            product.title.toLowerCase().includes(e.toLowerCase())
          )
        );
      }
    }
    //  else if (name == "condition") {
    //   if (e == "" || e == "Other") setAllData(data);
    //   else {
    //     setAllData(() =>
    //       data.filter((product) =>
    //         product.conditions.toLowerCase().includes(e.toLowerCase())
    //       )
    //     );
    //   }
    // } else if (name == "category") {
    //   if (e == "" || e == "Other") setAllData(data);
    //   else {
    //     setAllData(() =>
    //       data.filter((product) =>
    //         product.category.toLowerCase().includes(e.toLowerCase())
    //       )
    //     );
    //   }
    // }
  }

  return (
    <Layout title="Shop - Market">
      <div className="market_search-input">
        <em
          style={{
            color: "white",
            background: "#904D00",
            borderRadius: "50%",
            padding: "3px",
          }}
          className="market_icon-left"
        >
          {user?.firstName && user?.lastName
            ? getInitials(user?.firstName, user?.lastName)
            : null}
        </em>
        <input
          type="text"
          placeholder="Search..."
          className="market_input-field"
          onChange={(e) => searchData("name", e.target.value)}
        />
        <span className="market_icon-right">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/search--v1.png"
            alt="search--v1"
          />
        </span>
      </div>

      {data ? (
        <div className="grid-products row">
          <div className=" col-lg-6 container">
            <br />
            <br />
          </div>
          <div className=" col-lg-6 row container">
            {isLoading ? (
              <div className="section text-center col-12">
                <Spinner animation="grow" role="status" variant="danger">
                  <span className="text-center">Loading...</span>
                </Spinner>
              </div>
            ) : (
              currentItems?.map((product, i) => (
                <Link href={`/market/shop/${product?.id}`} key={i}>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-6 item grid-view-item style2">
                    <div className="grid-view_image">
                      {/*<!-- start product image -->*/}
                      <div
                        className="grid-view-item__link"
                        style={{
                          borderRadius: "12px",
                          border: "0.5px solid #cacdd1",
                        }}
                      >
                        <img
                          className="grid-view-item__image primary blur-up lazyload"
                          // dataSrc={`data:image/png;base64,${
                          //   JSON.parse(product?.files)[0]
                          // }`}
                          // src={`data:image/png;base64,${
                          //   JSON.parse(product?.files)[0]
                          // }`}
                          dataSrc={JSON.parse(product?.files)[0]}
                          src={JSON.parse(product?.files)[0]}
                          alt="image"
                          title="product"
                          style={{ height: "250px" }}
                        />
                        {/*<!-- End image -->*/}
                        {/*<!-- Hover image -->*/}
                        <img
                          className="grid-view-item__image hover blur-up lazyload"
                          // dataSrc={`data:image/png;base64,${
                          //   JSON.parse(product.files)[1]
                          //     ? JSON.parse(product.files)[1]
                          //     : JSON.parse(product.files)[0]
                          // }`}
                          // src={`data:image/png;base64,${
                          //   JSON.parse(product.files)[1]
                          //     ? JSON.parse(product.files)[1]
                          //     : JSON.parse(product.files)[0]
                          // }`}
                          dataSrc={
                            JSON.parse(product.files)[1]
                              ? JSON.parse(product.files)[1]
                              : JSON.parse(product.files)[0]
                          }
                          src={
                            JSON.parse(product.files)[1]
                              ? JSON.parse(product.files)[1]
                              : JSON.parse(product.files)[0]
                          }
                          alt="image"
                          title="product"
                          style={{ height: "250px" }}
                        />

                        <div className="product-labels rectangular">
                          <span
                            className="lbl on-sale"
                            title={product?.category}
                          >
                            {shortenString(product?.category, 20)}
                          </span>{" "}
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
                        <div
                          className="product-name"
                          style={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "28px",
                            lineHeight: "38px",
                            color: " #7e7570",
                          }}
                        >
                          <span>{product?.title}</span>
                        </div>
                        {/*<!-- End product name -->*/}
                        {/*<!-- product price -->*/}
                        <div className="product-price">
                          <span
                            className="price"
                            style={{
                              fontFamily: "Roboto",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "23px",
                              lineHeight: "38px",
                              color: "black",
                            }}
                          >
                            &#8358;{product?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="col-12 text-center">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage - 1)}
                  styl
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="page-width text-center"> No uploaded item yet</p>
      )}
    </Layout>
  );
}
