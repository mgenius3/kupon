import React, { useState, useEffect } from 'react';
// import { getInitials } from '../../../utils/stringManipulation';
import jwtDecode from 'jwt-decode';
import UserLayout from '../../../components/admin/Layout';
import Chart from '../../../components/chart';
const UserProfile = () => {
  const [token] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
  });
  const [user, setUser] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    const fetchCountPackages = async () => {
      try {
        const response = await fetch('/admin/count_packages', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const res = await response.json();
          throw new Error(res.msg);
        }
        const res = await response.json();
        setData(res.msg);
        console.log(res.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountPackages();
  }, []);
  return <UserLayout>{/* <Chart /> */}</UserLayout>;
};

export default UserProfile;
