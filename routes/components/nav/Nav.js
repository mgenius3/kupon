import React, { Fragment } from 'react';
import Search from './search';
import TopHeader from './topHeader';
import MainHeader from './mainHeader';
import MobileHeader from './mobileHeader';
// import { signOut, useSession } from 'next-auth/react';
export default function Nav() {
  return (
    <Fragment>
      <Search />
      <TopHeader />
      <MainHeader />
      <MobileHeader />
    </Fragment>
  );
}
