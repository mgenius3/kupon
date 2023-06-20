import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";
import PageAuthentication from "../../../hooks/useAuth";
import Link from "next/link";
import { getInitials } from "../../../utils/stringManipulation";
export default function Cart() {
  const router = useRouter();
  const { query } = router;
  const { product } = query;
  const [data, setData] = useState({});
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [imagetoshow, setImagetoshow] = useState(0);
  const [checkcopy, setCheckCopy] = useState(false);
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  useEffect(() => {
    fetch(`/sell/${product}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data?.msg);
      })
      .catch(() => {
        setError(error);
      });
  }, [product]);

  useEffect(() => {
    fetch(`/user/${data?.sellerId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data?.msg);
      })
      .catch(() => {
        // setError(error);
      });
  }, [data]);

  function handleCopy(copy_code) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(copy_code)
        .then(() => {
          setCheckCopy(true);
          console.log("URL copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy URL to clipboard:", error);
        });
    } else {
      fallbackCopyToClipboard(copy_code);
    }
  }

  function fallbackCopyToClipboard(copy_code) {
    const textArea = document.createElement("textarea");
    textArea.value = copy_code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCheckCopy(true);
  }

  return (
    <PageAuthentication>
      <Layout title="Cart - Market">
        {data ? (
          <div className="container" id="shop">
            <div>
              <div className="market_prod_head">
                <h1 className="market_prod_name">{data?.title}</h1>
                <p className="market_prod_price">#{data?.price}</p>
              </div>
              <div className="market_prod_img">
                <span className="market_prod_pics_main">
                  {typeof data.files === "string" ? (
                    <img
                      className="d-block"
                      src={`data:image/png;base64,${
                        JSON.parse(data?.files)[imagetoshow]
                      }`}
                      alt="Image One"
                      style={{ width: "100%" }}
                    />
                  ) : null}
                </span>
                <span className="market_prod_pics_sub">
                  {typeof data.files === "string"
                    ? JSON.parse(data?.files).map((file, i) => (
                        <img
                          className="d-block"
                          src={`data:image/png;base64,${file}`}
                          alt="Image One"
                          style={{ width: "100%" }}
                          onClick={() => setImagetoshow(i)}
                          key={i}
                        />
                      ))
                    : null}
                </span>
              </div>

              <div className="market_prod_description">
                <h3>Description</h3>
                <p>{data?.description}</p>
              </div>

              <div className="market_prod_seller_details">
                <div className="d1">
                  <p
                    style={{
                      color: "white",
                      background: "#904D00",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                    className="p1"
                  >
                    {" "}
                    {getInitials(user?.firstName, user?.lastName)}
                  </p>
                  <p className="p2">
                    <em className="market_prod_sellername">
                      {user?.firstName} {user?.lastName}
                    </em>
                    <em className="market_prod_sellerphone">
                      {Number(user?.telephone)}
                    </em>
                  </p>
                  {checkcopy ? (
                    <p
                      onClick={() => handleCopy(user?.telephone)}
                      className="p3"
                    >
                      Copied
                    </p>
                  ) : (
                    <p
                      onClick={() => handleCopy(user?.telephone)}
                      className="p3"
                    >
                      Copy Contact{" "}
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-glyphs/30/copy.png"
                        alt="copy"
                      />
                    </p>
                  )}
                </div>
                <div className="d2">
                  <Link href={`tel: ${user?.telephone}`}>
                    <p>Contact Seller</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Alert
            key="danger"
            variant="danger"
            style={{ margin: "200px 100px" }}
          >
            loading...
          </Alert>
        )}
      </Layout>
    </PageAuthentication>
  );
}
