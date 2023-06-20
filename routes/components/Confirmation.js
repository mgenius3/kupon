import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmationInput({ setConfirmation, action, title, packageId }) {
  const [value, setValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setConfirmed(false);
  };

  const handleConfirmClick = () => {
    if (value === 'confirm') {
      setConfirmed(true);
      setConfirmation(false);
      //action to take when confirmed
      action(packageId);
    } else {
      toast.error('wrong input');
    }
  };

  return (
    <Form.Group className="container p-5">
      <Form.Label>
        <span style={{ fontSize: '15px' }}>
          Enter <b style={{ color: 'green' }}>confirm</b> {title}
        </span>
      </Form.Label>
      <div className="d-flex">
        <input type="text" value={value} onChange={handleInputChange} />
      </div>
      <br />
      <Button onClick={handleConfirmClick}>Confirm</Button>
      {confirmed && <div className="text-success">Confirmed!</div>}
    </Form.Group>
  );
}

export default ConfirmationInput;
