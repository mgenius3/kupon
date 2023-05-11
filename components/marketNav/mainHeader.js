import React, { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import jwtDecode from 'jwt-decode';
import { getInitials } from '../../utils/stringManipulation';
import logout from '../../utils/logout';
import { useRouter } from 'next/router';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MainHeader() {
  const [token] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
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
  }, [token]);

  const userlogout = () => {
    let out = logout();
    if (out) router.push('/login');
  };

  return (
    //  <!--Header-->
    <Fragment>
      {/* mobile nav */}
      {/* <aside
        style={{
          position: 'absolute',
          top: '0px',
          zIndex: '100',
          background: 'white',
          padding: '20px 40px 10px 20px',
          width: '100%',
          display: openMobileNav == true ? 'block' : 'none',
        }}
      >
        <ul id="" className="site-nav medium center hidearrow">
          <img
            onClick={() => setOpenMobileNav(false)}
            src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
            style={{ position: 'absolute', right: '20px', cursor: 'pointer' }}
          />
          <li
            className="lvl1 parent megamenu"
            style={{
              cursor: 'pointer',
              padding: '10px',
              margin: '0px 10px',
              listStyle: 'none',
            }}
          >
            <Link href="/market">
              <p> Home</p>
            </Link>
          </li>
          <li
            className="lvl1 parent megamenu"
            style={{
              cursor: 'pointer',
              padding: '10px',
              margin: '0px 10px',
              listStyle: 'none',
            }}
          >
            <Link href="/market/shop">
              <p>Shop</p>
            </Link>
          </li>

          <li
            className="lvl1 parent dropdown"
            style={{
              cursor: 'pointer',
              padding: '10px',
              margin: '0px 10px',
              listStyle: 'none',
            }}
          >
            <Link href="/contact">
              <p> Contact Us</p>
            </Link>
          </li>

          <li
            className="lvl1"
            style={{
              cursor: 'pointer',
              padding: '10px',
              margin: '0px 10px',
              listStyle: 'none',
            }}
          >
            <Link href="/market/sell">
              <p>
                <b className="">Sell</b>{' '}
              </p>
            </Link>
          </li>
        </ul>
      </aside> */}
      {/* <div className="header-wrap classicHeader animated d-flex">
        <div className="container-fluid">
          <div
            className="row align-items-center"
            style={{ padding: '20px 0px' }}
          >
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <Link href="/">
                <img
                  src="/images/kupon logo with text (1).png"
                  alt="Belle Multipurpose Html Template"
                  width={100}
                  // title="Belle Multipurpose Html Template"
                />
              </Link>
            </div>
            <div className="col-2 col-sm-3 col-md-3 col-lg-8">
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                >
                  <i className="icon anm anm-times-l"></i>
                  <img
                    src="https://img.icons8.com/ios/50/1A1A1A/menu--v1.png"
                    width={20}
                    onClick={() => setOpenMobileNav(true)}
                  />
                </button>
              </div>
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center hidearrow">
                  <li
                    className="lvl1 parent megamenu"
                    style={{ cursor: 'pointer' }}
                  >
                    <Link href="/market">
                      <p>
                        {' '}
                        Home <i className="anm anm-angle-down-l mx-3"></i>
                      </p>
                    </Link>
                  </li>
                  <li
                    className="lvl1 parent megamenu"
                    style={{ cursor: 'pointer' }}
                  >
                    <Link href="/market/shop">
                      <p>
                        Shop <i className="anm anm-angle-down-l mx-3"></i>
                      </p>
                    </Link>
                  </li>

                  <li
                    className="lvl1 parent dropdown"
                    style={{ cursor: 'pointer' }}
                  >
                    <Link href="/contact">
                      <p>
                        {' '}
                        Contact Us<i className="anm anm-angle-down-l mx-3"></i>
                      </p>
                    </Link>
                  </li>

                  <li className="lvl1" style={{ cursor: 'pointer' }}>
                    <Link href="/market/sell">
                      <p>
                        <b className="">Sell</b>{' '}
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo ">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/images/kupon text for white bg.png"
                    alt="kupon"
                    title="kupon"
                    width={70}
                  />
                </Link>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-3 col-lg-2 justify-content-end">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <ul
                    className="navbar-nav"
                    style={{ position: 'absolute', right: '0px' }}
                  >
                    {!Object.keys(user).length ? (
                      <li>
                        <Link href="/login">
                          <small
                            style={{
                              fontSize: '15px',
                              cursor: 'pointer',
                            }}
                          >
                            {' '}
                            sign in{' '}
                          </small>
                        </Link>
                        <Link href="register">
                          <small
                            style={{
                              backgroundColor: '#e64c00',
                              color: 'white',
                              padding: '2px',
                              fontSize: '15px',
                              cursor: 'pointer',
                            }}
                            className="d-none d-sm-inline"
                          >
                            {' '}
                            sign up{' '}
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
                              color: 'white',
                              backgroundColor: 'black',
                              borderRadius: '50%',
                              padding: '3px',
                            }}
                          >
                            {getInitials(user?.firstName, user?.lastName)}
                          </p>
                        </a>
                        {avatarMenu ? (
                          <ul
                            className="bg-light position-absolute"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{ left: '-50px' }}
                          >
                            {user?.admin == 'yes' && (
                              <li
                                className="dropdown-item"
                                style={{ cursor: 'pointer' }}
                              >
                                <Link href={`/dashboard/admin/profile`}>
                                  <span>
                                    <img
                                      src="https://img.icons8.com/ios/50/null/administrator-male--v1.png"
                                      width={15}
                                    />{' '}
                                    Admin
                                  </span>
                                </Link>
                              </li>
                            )}
                            <li
                              className="dropdown-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <Link href={`/dashboard/user/market`}>
                                <span>
                                  <img
                                    src="https://img.icons8.com/ios-filled/50/null/user.png"
                                    width={15}
                                  />{' '}
                                  Profile
                                </span>
                              </Link>
                            </li>

                            <li
                              className="dropdown-item"
                              style={{ cursor: 'pointer' }}
                              onClick={() => userlogout()}
                            >
                              <span>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png"
                                  width={15}
                                />{' '}
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
            </div>
          </div>
        </div>
      </div> */}
      {/* <br />
      <br />
      <br /> */}
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
              <Nav.Link href="/market">Home</Nav.Link>
              <Nav.Link href="/market/shop">Shop</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/market/sell">Sell</Nav.Link>
              {/* <NavDropdown title="Menu" id="navbar-dropdown">
                <NavDropdown.Item href="/menu/item1">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="/menu/item2">Item 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/menu/item3">Item 3</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <img
                  src="/path/to/avatar.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Avatar"
                />
                User Profile */}

              <nav
                className="navbar navbar-expand-lg"
                style={{ position: 'relative', zIndex: '100' }}
              >
                <div className="container-fluid">
                  <ul
                    className="navbar-nav"
                    style={{ position: 'absolute', right: '0px' }}
                  >
                    {/* <!-- Avatar Menu --> */}
                    {!Object.keys(user).length ? (
                      <li>
                        <Link href="/login">
                          <small
                            style={{
                              fontSize: '15px',
                              cursor: 'pointer',
                            }}
                          >
                            {' '}
                            sign in{' '}
                          </small>
                        </Link>
                        <Link href="register">
                          <small
                            style={{
                              backgroundColor: '#e64c00',
                              color: 'white',
                              padding: '2px',
                              fontSize: '15px',
                              cursor: 'pointer',
                            }}
                            className="d-sm-inline"
                          >
                            {' '}
                            sign up{' '}
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
                              color: 'white',
                              backgroundColor: 'black',
                              borderRadius: '50%',
                              padding: '3px',
                            }}
                          >
                            {getInitials(user?.firstName, user?.lastName)}
                          </p>
                        </a>
                        {avatarMenu ? (
                          <ul
                            className="bg-light position-absolute"
                            aria-labelledby="navbarDropdownMenuLink"
                            style={{ left: '-50px' }}
                          >
                            {user?.admin == 'yes' && (
                              <li
                                className="dropdown-item"
                                style={{ cursor: 'pointer' }}
                              >
                                <Link href={`/dashboard/admin/profile`}>
                                  <span>
                                    <img
                                      src="https://img.icons8.com/ios/50/null/administrator-male--v1.png"
                                      width={15}
                                    />{' '}
                                    Admin
                                  </span>
                                </Link>
                              </li>
                            )}
                            <li
                              className="dropdown-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <Link href={`/dashboard/user/market`}>
                                <span>
                                  <img
                                    src="https://img.icons8.com/ios-filled/50/null/user.png"
                                    width={15}
                                  />{' '}
                                  Profile
                                </span>
                              </Link>
                            </li>

                            <li
                              className="dropdown-item"
                              style={{ cursor: 'pointer' }}
                              onClick={() => userlogout()}
                            >
                              <span>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png"
                                  width={15}
                                />{' '}
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
