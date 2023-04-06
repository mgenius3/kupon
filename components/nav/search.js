import React from 'react';
// import Link from 'next/link';

export default function Search() {
  return (
    // <!--Search Form Drawer-->
    <div className="search">
      <div className="search__form">
        <form className="search-bar__form" action="#">
          <button className="go-btn search__button" type="submit">
            <i className="icon anm anm-search-l"></i>
          </button>
          <input
            className="search__input"
            type="search"
            name="q"
            value=""
            placeholder="Search entire store..."
            aria-label="Search"
            autoComplete="off"
          />
        </form>
        <button type="button" className="search-trigger close-btn">
          <i className="anm anm-times-l"></i>
        </button>
      </div>
    </div>
  );
}
