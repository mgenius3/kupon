import React, { useState, useEffect } from 'react';
import UserLayout from '../../../components/admin/Layout';
import { Modal, Button } from 'react-bootstrap';
import ConfirmationInput from '../../../components/Confirmation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { shortenString } from '../../../utils/stringManipulation';

const UserLogistics = () => {
  const router = useRouter();
  const [token] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
  });

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [hideConfirmationModal, setHideConfirmationModal] = useState(true);

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        console.log(data);
        const response = await fetch('/admin/user', {
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
      const response = await fetch(`/admin/user/delete/${modalData?.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
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
          PLATFORM USER : <b>{data.length}</b>
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">TELEPHONE</th>
              <th scope="col">ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                key={item?.id}
                onClick={() => handleModalOpen(item)}
                style={{ cursor: 'pointer' }}
              >
                <td>{item?.id}</td>
                <td>{item?.firstName}</td>
                <td>{item?.lastName}</td>
                <td>{shortenString(item?.email, 10)}</td>
                <td>{item?.telephone}</td>
                <td>{shortenString(item?.address, 15)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ overflow: 'auto' }}>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <button
              style={{
                backgroundColor: modalData?.paid ? 'green' : 'red',
                color: 'white',
                padding: '2px 3px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              disabled={modalData?.status == 'delivered' ? true : false}
            >
              ID - {modalData?.id}
            </button>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  lineHeight: '1.5',
                }}
              >
                User&nbsp;Details
              </thead>{' '}
              <br />
              <tbody>
                <tr>
                  <th>USER ID</th>
                  <td>{modalData?.id}</td>
                </tr>
                <tr>
                  <th>FIRST NAME</th>
                  <td>{modalData?.firstName}</td>
                </tr>
                <tr>
                  <th>LAST NAME</th>
                  <td>{modalData?.lastName}</td>
                </tr>
                <tr>
                  <th>EMAIL</th>
                  <td>{modalData?.email}</td>
                </tr>
                <tr>
                  <th>TELEPHONE</th>
                  <td>{modalData?.telephone}</td>
                </tr>
                <tr>
                  <th>ADDRESS</th>
                  <td>{modalData?.address}</td>
                </tr>
              </tbody>
              <hr />
              <tfoot>
                <th>Date Joined</th>
                <td>{new Date(modalData?.created_at).toLocaleString()}</td>
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
              style={{ background: 'red', color: 'white' }}
            >
              Delete Account
            </Button>{' '}
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
              title={`to delete user account with id :.'${modalData?.id}'`}
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
