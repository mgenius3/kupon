// import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

const PageAuthentication = ({ children }) => {
  let router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        try {
          jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_KEY);
        } catch (err) {
          router.push('/login');
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PageAuthentication;
