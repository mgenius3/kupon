import React from 'react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    // <!--Top Header-->
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-5 col-lg-4">
            <p className="phone-no">
              <i className="anm anm-phone-s"></i> +440 0(111) 044 833
            </p>
          </div>
          <div className=" col-lg-4 d-none d-lg-none  d-lg-block d-md-none">
            <div className="text-center">
              <p className="top-header_middle-text">
                {' '}
                Kupon Express Shipping -- Online Market
              </p>
            </div>
          </div>
          <div className="col-4 col-sm-4 col-md-3 col-lg-4 text-right">
            <ul className=" list-inline">
              <li>
                <Link href="/logistics">Logistics</Link>
              </li>
              <li>
                <Link href="/market">Market</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
