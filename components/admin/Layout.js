import React, { useRef, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getInitials, shortenString } from "../../utils/stringManipulation";
import jwtDecode from "jwt-decode";
import logout from "../../utils/logout";
import PageAuthentication from "../../hooks/useAuth";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLayout({ children }) {
  const [noOfLogisticsisPending, setNoOfLogisticsIsPending] = useState(null);
  const [noOfContactMessages, setNoOfContactMessages] = useState(null);

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  const [user, setUser] = useState();
  const asideRef = useRef();
  const router = useRouter();

  useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const userlogout = () => {
    let out = logout();
    if (out) router.push("/login");
  };

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        const response = await fetch("/admin/logistics", {
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

        //pass pending logistics to user

        setNoOfLogisticsIsPending(
          res.msg?.filter(
            (a) => a.status == "pending" || a.status == "in transit"
          ).length
        );
      } catch (err) {
        console.log(err);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await fetch("/admin/all_contact_message", {
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
        console.log(res.msg);

        //pass pending logistics to user

        setNoOfContactMessages(res.msg?.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLogistics();
    fetchMessages();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Admin - Kupon </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/kupon icon.png" />
      </Head>

      <ToastContainer position="bottom-center" />

      <PageAuthentication>
        <main id="account">
          <aside ref={asideRef}>
            <div className="profile">
              <span>
                <span
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                >
                  {getInitials(user?.firstName, user?.lastName)}
                </span>
                <p>
                  Admin -{" "}
                  {shortenString(user?.firstName + " " + user?.lastName, 10)}
                </p>
              </span>

              <img
                id="cancel"
                src="https://img.icons8.com/ios/50/FD7E14/cancel.png"
                onClick={() => asideRef.current.classList.remove("menu")}
              />
            </div>

            <div className="side_links">
              <Link href="/home">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FD7E14/home-page--v1.png"
                    className="icon"
                  />
                  <b>Home</b>
                </span>
              </Link>

              <hr />

              <Link href="profile">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/FD7E14/user.png"
                    className="icon"
                  />
                  <b>My Profile</b>
                </span>
              </Link>

              <hr />

              <Link href="user">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/stickers/100/null/user-skin-type-3.png"
                    className="icon"
                  />
                  <b>User</b>
                </span>
              </Link>

              <hr />

              <Link href="logistics">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FD7E14/food-truck.png"
                    className="icon"
                  />
                  <b>Logistics({noOfLogisticsisPending})</b>
                </span>
              </Link>

              <hr />

              <Link href="market">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/FD7E14/shopping-cart--v1.png"
                    className="icon"
                  />
                  <b>Market</b>
                </span>
              </Link>

              <hr />

              <Link href="messages">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios/50/messages-mac.png"
                    className="icon"
                  />

                  <b>Messages({noOfContactMessages})</b>
                </span>
              </Link>

              <hr />

              <span style={{ cursor: "pointer" }} onClick={() => userlogout()}>
                <img
                  src="https://img.icons8.com/ios/50/FD7E14/logout-rounded--v1.png"
                  className="icon"
                />
                <b>Logout</b>
              </span>
            </div>
          </aside>

          <section className="main_container">
            <header>
              <div>
                <img
                  id="menu"
                  src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                  onClick={() => asideRef.current.classList.add("menu")}
                />

                <h3>Admin - Settings</h3>
                <p style={{ opacity: "0.7" }}>
                  Manage your personal and organization settings
                </p>
              </div>
            </header>

            <article>{children}</article>
          </section>
        </main>
      </PageAuthentication>
    </Fragment>
  );
}

export default UserLayout;
