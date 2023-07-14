import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/admin/Layout";
import FetchApiClient from "../../../fetch_api_clients/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";
import { shortenString } from "../../../utils/stringManipulation";

const ComplaintsPage = () => {
  const router = useRouter();
  const [data, setData] = useState();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  //modal
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  const handleModalOpen = (data) => {
    setShowModal(true);
    setModalData(data);
  };

  const handleModalClose = () => setShowModal(false);
  //modal

  let apiClient = new FetchApiClient("/admin", token);

  useEffect(() => {
    const fetchMessages = async () => {
      let { response } = await apiClient.get("/all_contact_message");
      if (response) setData(response);
      else toast.error("unable to fetch data");
    };
    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    let { response } = await apiClient.delete(`/contact_message/${id}`);
    if (response) {
      toast.success("message deleted successfully");
      router.reload();
    } else {
      toast.error("unable to delete");
    }
  };

  return (
    <AdminLayout>
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
                Name
              </th>
              <th scope="col" style={{ color: "white" }}>
                Email
              </th>

              <th scope="col" style={{ color: "white" }}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((msg, index) => (
              <tr key={index} style={{ cursor: "pointer" }}>
                <td onClick={() => handleModalOpen(msg)}>
                  {shortenString(msg.fullName, 12)}
                </td>
                <td onClick={() => handleModalOpen(msg)}>
                  {shortenString(msg.email, 12)}
                </td>
                <td onClick={() => handleModalOpen(msg)}>
                  {new Date(msg.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              lineHeight: "1.5",
              color: "#3c171773",
            }}
          >
            MESSAGES
          </Modal.Title>
          <br />
        </Modal.Header>

        <h1
          style={{
            fontFamily: "poppins",
            margin: "10px",
          }}
        >
          {modalData?.message}
        </h1>
        <Modal.Body>
          <table className="table">
            <thead></thead> <br />
            <tbody>
              <tr>
                <th>Name</th>
                <td>{modalData?.fullName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{modalData?.email}</td>
              </tr>
              <tr>
                <th>Telephone</th>
                <td>{modalData?.telephone}</td>
              </tr>
            </tbody>
            <tfoot>
              <th>Message Sent at</th>
              <td>{new Date(modalData?.created_at).toLocaleDateString()}</td>
            </tfoot>
          </table>
        </Modal.Body>

        <Modal.Footer className="justify-content-start">
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteMessage(modalData?.id);
              handleModalClose();
            }}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </Button>
        </Modal.Footer>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
};

export default ComplaintsPage;
