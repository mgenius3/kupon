import React from 'react';
import Link from 'next/link';

export default function MainHeader() {
  return (
    //  <!--Header-->
    <div className="header-wrap classicHeader animated d-flex">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* <!--Desktop Logo--> */}
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
          {/* <!--End Desktop Logo--> */}
          <div className="col-2 col-sm-3 col-md-3 col-lg-8">
            {/* <div className="d-block d-lg-none">
              <button
                type="button"
                className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
              >
                <i className="icon anm anm-times-l"></i>
                <img
                  src="https://img.icons8.com/ios/50/1A1A1A/menu--v1.png"
                  width={20}
                />
              </button>
</div> */}
            {/* <!--Desktop Menu--> */}
            <nav className="grid__item" id="AccessibleNav">
              {/* <!-- for mobile --> */}
              {/* <ul id="siteNav" className="site-nav medium center hidearrow">
                <li className="lvl1 parent megamenu" style={{ cursor: 'pointer' }}>
                  <Link href="/">
                    <p>
                      {' '}
                      Home <i className="anm anm-angle-down-l mx-3"></i>
                    </p>
                  </Link>
                </li>
                <li className="lvl1 parent megamenu" style={{ cursor: 'pointer' }}>
                  <Link href="/shop">
                    <p>
                      Shop <i className="anm anm-angle-down-l mx-3"></i>
                    </p>
                  </Link>
                </li>

                <li className="lvl1 parent dropdown" style={{ cursor: 'pointer' }}>
                  <Link href="/contact-us">
                    <p>
                      {' '}
                      Contact Us<i className="anm anm-angle-down-l mx-3"></i>
                    </p>
                  </Link>
                </li>

                <li className="lvl1" style={{ cursor: 'pointer' }}>
                  <Link href="/logistics">
                    <p>
                      <b className="">Send Package</b>{' '}
                    </p>
                  </Link>
                </li>
              </ul> */}
            </nav>
            {/* <!--End Desktop Menu--> */}
          </div>
          {/* <!--Mobile Logo--> */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
            <div className="logo">
              <Link href="/">
                <img
                  src="/images/kupon logo with text (1).png"
                  alt="Belle Multipurpose Html Template"
                  title="Belle Multipurpose Html Template"
                  width={100}
                />
              </Link>
            </div>
          </div>
          {/* <!--Mobile Logo--> */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
