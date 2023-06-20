import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useForm } from "react-hook-form";
// import { useMutation } from 'react-query';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUpload from "../../utils/fileupload";
import { statesInNigeria } from "../../utils/data";
import PageAuthentication from "../../hooks/useAuth";
import LoadingOverlay from "../../components/loadingOverlay";

export default function Logistics() {
  const [data, setData] = useState({});
  const [imageUrl, setImageUrl] = useState([]);
  const [fileUploadError, setFileUploadError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  useEffect(() => {
    toast.error(fileUploadError);
    setData({ ...data, ["files"]: JSON.stringify(imageUrl) });
  }, [imageUrl]);

  const { handleSubmit } = useForm();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitPackageDetails = async () => {
    setIsLoading(true);
    try {
      console.log(data);
      const response = await fetch("/logistic/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const res = await response.json();
        setIsLoading(false);
        throw new Error(res.msg);
      }
      const res = await response.json();
      if (window !== undefined) window.location.replace(`${res.msg}`);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <PageAuthentication>
      <Layout>
        <div id="page-content" style={{ margin: "50px 0px" }}>
          <div className="page section-header text-center">
            <div className="page-title">
              <div className="wrapper">
                <h1 className="page-width">Send Package</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="customer-box returning-customer">
                  <div
                    id="customer-login"
                    className="collapse customer-content"
                  >
                    <div className="customer-info">
                      <p className="coupon-text">
                        If you have shopped with us before, please enter your
                        details in the boxes below. If you are a new customer,
                        please proceed to the Billing &amp; Shipping section.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row billing-fields container">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 sm-margin-30px-bottom mx-auto">
                <div className="create-ac-content bg-light-gray padding-20px-all">
                  <form onSubmit={handleSubmit(submitPackageDetails)}>
                    <fieldset>
                      <h2 className="login-title mb-3">Package Details</h2>
                      <ImageUpload
                        setFileUploadError={setFileUploadError}
                        setImageUrl={setImageUrl}
                      />
                      <hr />
                      <br />

                      <div className="row">
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-firstname">
                            Package Name <span className="required-f">*</span>
                          </label>
                          <input
                            name="packageName"
                            id="input-packageName"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-firstname">
                            First Name <span className="required-f">*</span>
                          </label>
                          <input
                            name="firstName"
                            id="input-firstname"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-lastname">
                            Last Name <span className="required-f">*</span>
                          </label>
                          <input
                            name="lastName"
                            id="input-lastname"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-email">
                            E-Mail <span className="required-f">*</span>
                          </label>
                          <input
                            name="email"
                            id="input-email"
                            type="email"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-telephone">
                            Telephone (sender)
                            <span className="required-f">*</span>
                          </label>
                          <input
                            name="telephone"
                            id="input-telephone"
                            type="tel"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6">
                          <label htmlFor="input-company">Company</label>
                          <input
                            name="company"
                            id="input-company"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-address-1">
                            Pickup Address <span className="required-f">*</span>
                          </label>
                          <input
                            name="pickupAddress"
                            id="input-address-1"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-city">
                            Pickup City <span className="required-f">*</span>
                          </label>
                          <input
                            name="pickupCity"
                            id="input-city"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-zone">
                            Pickup Region / State{" "}
                            <span className="required-f">*</span>
                          </label>
                          <select
                            name="pickupState"
                            id="input-zone"
                            required
                            onChange={handleInputChange}
                          >
                            <option disabled> --- Please Select --- </option>
                            {statesInNigeria?.map((state, i) => (
                              <option value={state} key={i}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-telephone">
                            Telephone (Receiver)
                            <span className="required-f">*</span>
                          </label>
                          <input
                            name="receiverTelephone"
                            id="input-telephone"
                            type="tel"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-postcode">
                            Post Code <span className="required-f">*</span>
                          </label>
                          <input
                            name="postCode"
                            id="input-postcode"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-address-1">
                            Delivery Address{" "}
                            <span className="required-f">*</span>
                          </label>
                          <input
                            name="deliveryAddress"
                            id="input-address-1"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-address-1">
                            Delivery City <span className="required-f">*</span>
                          </label>
                          <input
                            name="deliveryCity"
                            id="input-address-1"
                            type="text"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                          <label htmlFor="input-zone">
                            Delivery Region / State{" "}
                            <span className="required-f">*</span>
                          </label>
                          <select
                            name="deliveryState"
                            id="input-zone"
                            onChange={handleInputChange}
                          >
                            <option disabled selected>
                              {" "}
                              --- Please Select ---{" "}
                            </option>
                            {statesInNigeria?.map((state, i) => (
                              <option value={state} key={i}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset></fieldset>

                    <fieldset>
                      <div className="row">
                        <div className="form-group col-md-12 col-lg-12 col-xl-12">
                          <label htmlFor="input-company">
                            Package Description{" "}
                            <span className="required-f">*</span>
                          </label>
                          <textarea
                            className="form-control resize-both"
                            rows="3"
                            name="description"
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>
                    <div className="order-button-payment">
                      {isLoading ? (
                        <LoadingOverlay />
                      ) : (
                        <button
                          className="btn"
                          value="Place order"
                          type="submit"
                        >
                          Proceed
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </PageAuthentication>
  );
}
