import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import jwtDecode from "jwt-decode";
import { getInitials } from "../../utils/stringManipulation";
import logout from "../../utils/logout";
import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function MainHeader() {
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });
  const [user, setUser] = useState({});
  // const [openMobileNav, setOpenMobileNav] = useState(false);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const userlogout = () => {
    let out = logout();
    if (out) router.push("/login");
  };
  return (
    //  <!--Header-->
    <Fragment>
      {/* mobile nav */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/kupon logo with text (1).png"
              width="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/logistics/send">
                <b>Send Package</b>
              </Nav.Link>
            </Nav>
            <Nav>
              <nav
                className="navbar navbar-expand-lg"
                style={{ position: "relative", zIndex: "100" }}
              >
                <div className="container-fluid">
                  <ul
                    className="navbar-nav"
                    style={{ position: "absolute", right: "0px" }}
                  >
                    {/* <!-- Avatar Menu --> */}
                    {!Object.keys(user).length ? (
                      <li>
                        <Link href="/login">
                          <small
                            style={{
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            sign in{" "}
                          </small>
                        </Link>
                        <Link href="register">
                          <small
                            style={{
                              backgroundColor: "#e64c00",
                              color: "white",
                              padding: "2px",
                              fontSize: "15px",
                              cursor: "pointer",
                              borderRadius: "3px",
                            }}
                            className="d-sm-inline"
                          >
                            {" "}
                            sign&nbsp;up{" "}
                          </small>
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle d-flex align-items-center"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setAvatarMenu(!avatarMenu)}
                        >
                          <p
                            style={{
                              color: "white",
                              background: "#904D00",
                              borderRadius: "50%",
                              padding: "3px",
                            }}
                          >
                            {getInitials(user?.firstName, user?.lastName)}
                          </p>
                        </a>
                        {avatarMenu ? (
                          <ul
                            className="bg-light position-absolute"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{ left: "-50px" }}
                          >
                            {user?.admin == "yes" && (
                              <li
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                <Link href={`/dashboard/admin/profile`}>
                                  <span>
                                    <img
                                      src="https://img.icons8.com/ios/50/null/administrator-male--v1.png"
                                      width={15}
                                    />{" "}
                                    Admin
                                  </span>
                                </Link>
                              </li>
                            )}
                            <li
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                            >
                              <Link href={`/dashboard/user/profile`}>
                                <span>
                                  <img
                                    src="https://img.icons8.com/ios-filled/50/null/user.png"
                                    width={15}
                                  />{" "}
                                  Profile
                                </span>
                              </Link>
                            </li>

                            <li
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              onClick={() => userlogout()}
                            >
                              <span>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png"
                                  width={15}
                                />{" "}
                                Logout
                              </span>
                            </li>
                          </ul>
                        ) : null}
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
