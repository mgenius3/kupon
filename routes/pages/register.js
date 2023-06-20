import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Register() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitNewUser = async () => {
    if (data.password !== "" && data.cpassword !== "") {
      if (data.password == data.cpassword) {
        // addUserMutation.mutate(data);
        setIsLoading(true);
        try {
          const response = await fetch("/user/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            const res = await response.json();
            setIsLoading(false);
            throw new Error(res.msg);
          }
          const res = await response.json();
          toast.success("successful");
          localStorage.setItem("token", res);
          setIsLoading(false);
          router.push("/");
        } catch (err) {
          setIsLoading(false);
          toast.error(err.message);
        }
        // return res;
      } else {
        toast.error("password and confirm password are not equal");
      }
    } else {
      toast.error("please fill in the details correctly");
    }
  };
  return (
    <Layout title="Register">
      <div id="page-content">
        <img
          src="/images/kupon logo with text (1).png"
          width={100}
          className="mx-4 my-2"
        />
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="page-width">Create an Account</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
              <div className="mb-4">
                <form
                  onSubmit={handleSubmit(submitNewUser)}
                  id="CustomerLoginForm"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="FirstName">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder=""
                          id="firstName"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="LastName">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder=""
                          id="LastName"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="input-telephone">
                          Telephone <span className="required-f">*</span>
                        </label>
                        <input
                          name="telephone"
                          id="input-telephone"
                          type="tel"
                          required
                          {...register("telephone", {
                            required: "Please enter telephone number",
                            minLength: {
                              value: 11,
                              message:
                                "telephone number must be exacty 11 numbers",
                            },
                            maxLength: {
                              value: 11,
                              message:
                                "telephone number must be exacty 11 numbers",
                            },
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.telephone && (
                          <div className="text-danger text-center">
                            {errors.telephone.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="input-address-1">
                          Address <span className="required-f">*</span>
                        </label>
                        <input
                          name="address"
                          id="input-address-1"
                          type="text"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerEmail">Email *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder=""
                          {...register("email", {
                            required: "Please enter email",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                              message: "Please enter valid email",
                            },
                          })}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerPassword">Password *</label>
                        <input
                          type="password"
                          defaultValue=""
                          name="password"
                          id="password"
                          {...register("password", {
                            required: "Please enter password",
                            minLength: {
                              value: 6,
                              message:
                                "password should be more than 6 characters",
                            },
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.password && (
                          <div className="text-danger text-center">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          defaultValue=""
                          name="cpassword"
                          id="password"
                          placeholder="confirm password"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                      {isLoading ? (
                        <input
                          className="btn mb-3"
                          value="loading..."
                          disabled
                        />
                      ) : (
                        <input
                          type="submit"
                          className="btn mb-3"
                          value="submit"
                        />
                      )}

                      <p
                        className="mb-4 text-center"
                        style={{ color: "black", cursor: "pointer" }}
                      >
                        {/* <a href="#" id="RecoverPassword">
                          Forgot your password?
                        </a>{' '}
                        &nbsp; | &nbsp; */}
                        Already a memeber ?{" "}
                        <Link href="/login" id="customer_register_link">
                          <b style={{ color: "#6e0000" }}>sign in </b>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
