import Layout from "../../components/Layout";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import TrackItemScreen from "./track_item_screen";

export default function TrackItem() {
  const [checkcopy, setCheckCopy] = useState(false);
  const [trackingCode, setTrackingCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  function handleCopy() {
    const textToCopy = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCheckCopy(true);
          console.log("URL copied to clipboard!");
        })
        .catch((error) => {
          alert("Failed to copy URL to clipboard:", error);
          console.error("Failed to copy URL to clipboard:", error);
        });
    } else {
      fallbackCopyToClipboard(textToCopy);
    }
  }

  function fallbackCopyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCheckCopy(true);
    console.log("URL copied to clipboard!");
  }

  const submitTrackingCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/logistic/track_package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingCode }),
      });

      if (!response.ok) {
        const res = await response.json();
        setIsLoading(false);
        throw new Error(res.msg);
      }
      const res = await response.json();
      setData(res.msg);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setData(null);
      toast.error("package does not exist");
    }
  };

  if (data == null)
    return (
      <Layout title="Tracking">
        <Container
          id="logistics_tracking"
          style={{
            margin: "0px",
          }}
        >
          <Row>
            <img
              src="/images/packagedelivery.png"
              alt="kupon"
              style={{ width: "70%", margin: "20px auto" }}
            />

            <p
              style={{
                color: "#B46200",
                fontSize: "22px",
                margin: "50px",
              }}
            >
              An item is on it’s way to you , please enter the tracking code to
              track your item{" "}
            </p>

            <input
              style={{
                padding: "20px",
                borderRadius: "5px",
                margin: "10px 50px",
              }}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter tracking code"
            />
            <div
              style={{
                display: "flex",
                margin: "10px",
                marginLeft: "0px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {isLoading ? (
                <button
                  style={{
                    padding: "10px 30px",
                    borderRadius: "5px",
                    margin: "10px 50px",
                    background: "#FD901A",
                    color: "white",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    wordBreak: "keep-all",
                  }}
                  disabled
                >
                  Tracking ...
                </button>
              ) : (
                <button
                  style={{
                    padding: "10px 30px",
                    borderRadius: "5px",
                    margin: "10px 50px",
                    background: "#FD901A",
                    color: "white",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    wordBreak: "keep-all",
                  }}
                  onClick={() => submitTrackingCode()}
                >
                  Track your item
                </button>
              )}

              {checkcopy ? (
                <p onClick={() => handleCopy()} className="p3">
                  Linked Copied
                </p>
              ) : (
                <p
                  title="click to copy"
                  onClick={() => handleCopy()}
                  className="p3"
                  style={{
                    padding: "10px",
                    margin: "0px 50px",
                    background: "rgb(144,77,0)",
                    color: "white",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/copy.png"
                    alt="copy"
                  />{" "}
                  Copy tracking link to share with recipient{" "}
                </p>
              )}
            </div>
          </Row>
        </Container>
      </Layout>
    );

  return <TrackItemScreen data={data[0]} />;
}
