import React, { useState, useEffect } from "react";
import UserLayout from "../../../../components/admin/Layout";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ConfirmationInput from "../../../../components/Confirmation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "react-bootstrap";
const UserLogistics = () => {
  const router = useRouter();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  const [data, setData] = useState([]);
  // const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  //to display confirmation input
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [hideConfirmationModal, setHideConfirmationModal] = useState(true);

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        const response = await fetch("/admin/market", {
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
      } catch (err) {
        console.log(err);
      }
    };
    fetchLogistics();
  }, []);

  const handleModalOpen = (item) => {
    setShowModal(true);
    setModalData(item);
  };
  const handleModalClose = () => setShowModal(false);

  const deletePackage = async () => {
    // setIsLoadingDeleteStatus(true);
    try {
      const response = await fetch(`/admin/market/delete/${modalData?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        // setIsLoadingDeleteStatus(false);
        const res = await response.json();
        throw new Error(res?.msg);
      }
      const res = await response.json();
      toast.success(res?.msg);
      // setIsLoadingDeleteStatus(false);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserLayout>
      <div className="table-responsive">
        <h1>
          MARKET TABLE : <b>{data.length}</b>
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">PRODUCT ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">CONDITIONS</th>
              <th scope="col">Price</th>
              <th scope="col">Paid</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                key={item?.id}
                onClick={() => handleModalOpen(item)}
                style={{ cursor: "pointer" }}
              >
                <td>{item?.id}</td>
                <td>{item?.title}</td>
                <td>{item?.conditions}</td>
                <td>{item?.price}</td>
                <td>
                  <b style={{ color: `${item?.paid ? "green" : "red"}` }}>
                    {" "}
                    {item?.paid ? "true" : "false"}{" "}
                  </b>
                </td>
                <td
                  style={{
                    color:
                      item?.status == "pending"
                        ? "red"
                        : item?.status == "in transit"
                        ? "#f1c40f"
                        : "green",
                  }}
                >
                  {item?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ overflow: "auto" }}>
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
              Market Details
            </Modal.Title>
            <br />

            <button
              style={{
                backgroundColor: modalData?.paid ? "green" : "red",
                color: "white",
                padding: "2px 3px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              disabled={modalData?.status == "delivered" ? true : false}
            >
              {modalData?.paid ? "paid" : "not paid"}
            </button>
          </Modal.Header>
          <Modal.Body>
            <Carousel className="w-screen">
              {typeof modalData?.files == "string"
                ? JSON.parse(modalData?.files).map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        // src={`data:image/png;base64,${image}`}
                        src={image}
                        alt={`Product ${modalData.title}`}
                        style={{ height: "auto" }}
                      />
                    </Carousel.Item>
                  ))
                : null}
            </Carousel>{" "}
            <br />
            <table className="table">
              <thead
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  lineHeight: "1.5",
                }}
              >
                Product&nbsp;Details
              </thead>{" "}
              <br />
              <tbody>
                <tr>
                  <th>SELLER ID</th>
                  <td>{modalData?.sellerId}</td>
                </tr>
                <tr>
                  <th>PRODUCT ID</th>
                  <td>{modalData?.id}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{modalData?.category}</td>
                </tr>
                <tr>
                  <th>Conditions</th>
                  <td>{modalData?.conditions}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{modalData?.location}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{modalData?.city}</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>{modalData?.state}</td>
                </tr>
                <tr>
                  <th>Material</th>
                  <td>{modalData?.material}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{modalData?.price}</td>
                </tr>
              </tbody>
              <hr />
              <tfoot>
                <th>Date Created</th>
                <td>{new Date(modalData?.created_at).toLocaleString()}</td>
              </tfoot>
              <tfoot>
                <th>Description</th>
                <td>{modalData?.description}</td>
              </tfoot>
            </table>
          </Modal.Body>

          <Modal.Footer className="justify-content-start">
            <Button
              variant="danger"
              onClick={() => {
                handleModalClose();
                setHideConfirmationModal(true);
                setDeleteConfirmation(true);
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

        {deleteConfirmation ? (
          <Modal show={hideConfirmationModal}>
            <ConfirmationInput
              setConfirmation={setDeleteConfirmation}
              action={deletePackage}
              title={`to delete package of id :.'${modalData?.id}'`}
            />

            <Modal.Footer>
              <Button
                variant="error"
                onClick={() => setHideConfirmationModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>
    </UserLayout>
  );
};

export default UserLogistics;
