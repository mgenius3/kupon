import Layout from "../../components/Layout";

import React, { useState } from "react";

import { Container } from "react-bootstrap";

export default function TrackItemScreen({ data }) {
  console.log(data);
  const [checkcopy, setCheckCopy] = useState(false);

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

  return (
    <Layout title="Tracking - Status">
      <Container
        id="logistics_tracking"
        style={{
          margin: "0px",
        }}
        className="tracking"
      >
        <div>
          <h1 style={{}} className="head">
            Order Status
          </h1>

          <div className="head_body">
            <div className="d1">
              {typeof data?.files === "string" ? (
                <img
                  className="d-block"
                  src={`data:image/png;base64,${JSON.parse(data?.files)[0]}`}
                  alt="Kupon"
                />
              ) : null}
              <p>{data?.packageName}</p>
            </div>

            <div className="d2">
              <h3>Delivery Address</h3>
              <p>{data?.deliveryAddress}</p>
            </div>

            <div className="d3">
              <p>
                Tracking Code : <b>{data?.packageCode}</b>
              </p>

              {checkcopy ? (
                <p className="p3">Copied</p>
              ) : (
                <p
                  onClick={() => handleCopy()}
                  className="p3"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Copy Tracking Link{" "}
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/copy.png"
                    alt="copy"
                  />
                </p>
              )}
            </div>
          </div>

          <div className="status">
            <p
              className="p1"
              style={{
                background:
                  data?.status == "pending"
                    ? "#e60000"
                    : data?.status == "in transit"
                    ? "#FD901A"
                    : "green",
              }}
            >
              {" "}
              <img
                width="20"
                height="20"
                src={
                  data?.status == "pending"
                    ? "https://img.icons8.com/ios-filled/50/clock--v1.png"
                    : data?.status == "in transit"
                    ? "https://img.icons8.com/ios/50/airplane-take-off.png"
                    : "https://img.icons8.com/ios/50/airplane-landing.png"
                }
                alt="clock--v1"
              />{" "}
              <b>{data?.status}</b>
            </p>
            <p className="p2">
              {data?.status == "pending"
                ? null
                : data?.status == "in transit"
                ? `your item was picked up @${new Date(
                    data?.updated_at
                  ).toLocaleString()}`
                : `your item was delivered @${new Date(
                    data?.updated_at
                  ).toLocaleString()}`}
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
