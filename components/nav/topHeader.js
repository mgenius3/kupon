import React from 'react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    // <!--Top Header-->
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-8 col-lg-8">
            <Link href="tel:440 0(111) 044 833">
              <p className="phone-no">
                <i className="anm anm-phone-s"></i> +440 0(111) 044 833
              </p>
            </Link>
          </div>

          <div className="col-4 col-sm-4 col-lg-4 justify-content-end">
            {/* <ul className="customer-links list-inline">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Create Account</Link>
              </li>
            </ul> */}
            {/* <img
              src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/737373/external-dark-basic-creatype-glyph-colourcreatype.png"
              style={{
                width: '20px',
                position: 'absolute',
                right: '0px',
                cursor: 'pointer',
              }}
            /> */}
            <Link href="/logistics/send">
              <p
                style={{
                  width: '20px',
                  position: 'absolute',
                  right: '70px',
                  cursor: 'pointer',
                  wordBreak: 'unset',
                }}
              >
                Send&nbsp;Package
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
