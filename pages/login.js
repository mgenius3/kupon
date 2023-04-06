import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
// import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';

export default function Login() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { handleSubmit } = useForm();
  // const logInUserMutation = useMutation(
  //   async (data) => {
  //     const response = await fetch('/user/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       const res = await response.json();
  //       throw new Error(res.msg);
  //     }
  //     const res = await response.json();
  //     return res;
  //   },
  //   {
  //     onSuccess: (data) => {
  //       toast.success('successful');
  //       localStorage.setItem('token', data);
  //       router.back();
  //     },
  //     onError: (err) => {
  //       toast.error(err.message);
  //     },
  //   }
  // );

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitLoginDetails = async () => {
    // logInUserMutation.mutate(data);
    setIsLoading(true);
    try {
      const response = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const res = await response.json();
        setIsLoading(false);
        throw new Error(res.msg);
      }
      const res = await response.json();
      localStorage.setItem('token', res);
      setIsLoading(false);
      router.back();
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <Layout title="Login">
      <div id="page-content">
        <img
          src="/images/kupon logo with text (1).png"
          width={100}
          className="mx-4 my-2"
        />
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="mx-2">Login</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
              <div className="mb-4">
                <form
                  method="post"
                  action="#"
                  id="CustomerLoginForm"
                  acceptCharset="UTF-8"
                  className="contact-form"
                  onSubmit={handleSubmit(submitLoginDetails)}
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerEmail">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="CustomerEmail"
                          autoCorrect="off"
                          autoCapitalize="off"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerPassword">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder=""
                          id="CustomerPassword"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                      {isLoading ? (
                        <input value="loading..." className="btn mb-3"></input>
                      ) : (
                        <input
                          type="submit"
                          className="btn mb-3"
                          value="Sign In"
                        />
                      )}
                      <p className="mb-4">
                        <a href="#" id="RecoverPassword">
                          Forgot your password?
                        </a>{' '}
                        &nbsp; | &nbsp;
                        <Link href="/register" id="customer_register_link">
                          Create account
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
