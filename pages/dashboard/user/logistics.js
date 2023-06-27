import React, { useState, useEffect } from "react";
import UserLayout from "../../../components/user/Layout";
import Link from "next/link";
import { toast } from "react-toastify";

const UserLogistics = () => {
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });
  const [data, setData] = useState([]);

  // const [checkcopy, setCheckCopy] = useState(false);

  function handleCopy(copy_code) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(copy_code)
        .then(() => {
          // setCheckCopy(true);
          toast.info("copied");
        })
        .catch((error) => {
          alert("Failed to copy URL to clipboard:", error);
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
    // setCheckCopy(true);
    toast.info("copied");
  }

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        const response = await fetch("/logistic/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const res = await response.json();
          throw new Error(res.msg);
        }
        const res = await response.json();
        setData(res.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLogistics();
  }, []);

  const pay = async (id) => {
    try {
      const response = await fetch(`/logistic/pay/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.msg);
      }
      const res = await response.json();
      if (window !== undefined) window.location.replace(`${res.msg}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserLayout>
      <div className="table-responsive">
        <h1>
          LOGISTICS ORDER : <b>{data.length}</b>
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Shipment ID</th>
              <th scope="col">Status</th>
              <th scope="col">Paid</th>
              <th scope="col">Track Code</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>

                <td
                  style={{
                    color:
                      item?.status == "pending"
                        ? "red"
                        : item?.status == "in transit"
                        ? "#f1c40f"
                        : "green",
                  }}
                >
                  {item?.status}
                </td>
                <td>
                  {item.paid ? (
                    "paid"
                  ) : item.paid == false ? (
                    <small
                      style={{
                        background: "red",
                        color: "white",
                        padding: "2px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => pay(item?.id)}
                    >
                      <b className="text-white">pay&nbsp;now</b>
                    </small>
                  ) : null}
                </td>

                <td
                  onClick={() => handleCopy(item?.packageCode)}
                  style={{ cursor: "pointer" }}
                >
                  {item?.packageCode}
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/copy.png"
                    alt="copy"
                  />
                </td>

                <td>
                  <Link href="/logistics/track_code_screen">
                    <em
                      style={{
                        backgroundColor: "#FD901A",
                        borderRadius: "14px",
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer",
                        padding: "8px 20px",
                        width: "200px",
                        whiteSpace: "nowrap",
                        wordBreak: "keep-all",
                      }}
                    >
                      {" "}
                      Track Item{" "}
                    </em>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
};

export default UserLogistics;
