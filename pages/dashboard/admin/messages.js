import React, { useState, useEffect } from "react";
import UserLayout from "../../../components/admin/Layout";

const ComplaintsPage = () => {
  const [data, setData] = useState();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log(data);
        const response = await fetch("/admin/all_contact_message", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const res = await response.json();
          throw new Error(res.msg);
        }
        const res = await response.json();
        setData(res.msg);
        //pass pending logistics to user
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, []);
  return (
    <UserLayout>
      <div className="container mt-5">
        <h1
          className="text-center mb-4 "
          style={{
            fontSize: "30px",
          }}
        >
          Messages
        </h1>
        <table className="table table-striped">
          <thead className="thead-dark text-white">
            <tr>
              <th scope="col" style={{ color: "white" }}>
                Full Name
              </th>
              <th scope="col" style={{ color: "white" }}>
                Email
              </th>
              <th scope="col" style={{ color: "white" }}>
                Phone
              </th>
              <th scope="col" style={{ color: "white" }}>
                Messages
              </th>
              <th scope="col" style={{ color: "white" }}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((msg, index) => (
              <tr key={index}>
                <td>{msg.fullName}</td>
                <td>{msg.email}</td>
                <td>{msg.telephone}</td>
                <td style={{ color: "grey" }}>{msg.message}</td>
                <td>{new Date(msg.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
};

export default ComplaintsPage;
