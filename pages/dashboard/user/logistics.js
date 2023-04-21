import React, { useState, useEffect } from 'react';
import { shortenString } from '../../../utils/stringManipulation';
import UserLayout from '../../../components/user/Layout';
const UserLogistics = () => {
  const [token] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        console.log(data);
        const response = await fetch('/logistic/user', {
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
        console.log(res);
        setData(res.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLogistics();
  }, []);

  const pay = async (id) => {
    try {
      const response = await fetch(`/logistic/pay/${id}`, {
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
      if (window !== undefined) window.location.replace(`${res.msg}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserLayout>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Shipment ID</th>
              <th scope="col">Address(Sender)</th>
              <th scope="col">Address(receiver)</th>
              <th scope="col">Status</th>
              <th scope="col">Paid</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{shortenString(item?.pickupAddress, 20)}</td>
                <td>{shortenString(item?.deliveryAddress, 20)}</td>
                <td
                  style={{
                    color:
                      item?.status == 'pending'
                        ? 'red'
                        : item?.status == 'in transit'
                        ? '#f1c40f'
                        : 'green',
                  }}
                >
                  {item?.status}
                </td>
                <td>
                  {item?.paid ? (
                    'paid'
                  ) : (
                    <small
                      style={{
                        background: 'red',
                        color: 'white',
                        padding: '2px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => pay(item?.id)}
                    >
                      <b className="text-white">pay&nbsp;now</b>
                    </small>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
};

export default UserLogistics;
