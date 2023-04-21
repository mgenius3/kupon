import React from 'react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    // <!--Top Header-->
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-8 col-lg-8">
            <Link href="tel:07033717055">
              <p className="phone-no">
                <i className="icon anm anm-phone-s"> </i>
                07033717055
              </p>
            </Link>
          </div>

          <div className="col-4 col-sm-4 col-lg-4 justify-content-end">
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
