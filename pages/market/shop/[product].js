import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import { Carousel, Alert, Card } from 'react-bootstrap';
import PageAuthentication from '../../../hooks/useAuth';
import Link from 'next/link';
export default function Cart() {
  const router = useRouter();
  const { query } = router;
  const { product } = query;
  const [data, setData] = useState({});
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [token] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
  });

  useEffect(() => {
    fetch(`/sell/${product}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data?.msg);
      })
      .catch(() => {
        setError(error);
      });
  }, [product]);

  useEffect(() => {
    fetch(`/user/${data?.sellerId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data?.msg);
      })
      .catch(() => {
        // setError(error);
      });
  }, [data]);

  console.log(typeof data?.files);

  return (
    <PageAuthentication>
      <Layout title="Cart - Market">
        {data ? (
          <div id="page-content" style={{ margin: '60px 0px' }}>
            <div className="page section-header text-center">
              <div className="page-title">
                <div className="wrapper">
                  <h1 className="page-width">Your cart</h1>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col mx-auto">
                  <div className="cart style2">
                    <div style={{ display: 'block' }}>
                      <h2 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                        {data?.category}
                      </h2>
                      <Card>
                        <Carousel>
                          {typeof data.files === 'string'
                            ? JSON.parse(data.files)?.map((file, i) => (
                                <Carousel.Item interval={4500} key={i}>
                                  <img
                                    className="d-block"
                                    src={`data:image/png;base64,${file}`}
                                    alt="Image One"
                                    style={{ width: '100%' }}
                                  />
                                  <Carousel.Caption
                                    style={{ background: '#e64c0066' }}
                                  >
                                    <h3>{data?.title} </h3>
                                    <p
                                      style={{
                                        background: 'rgb(230 76 0)',
                                        color: 'white',
                                      }}
                                    >
                                      {' '}
                                      {data?.description}{' '}
                                    </p>
                                  </Carousel.Caption>
                                </Carousel.Item>
                              ))
                            : null}
                        </Carousel>
                        <Card.Body>
                          <Card.Title>{data?.title}</Card.Title>
                          <Card.Text>Material: {data?.material}</Card.Text>
                          <small>Condition : {data?.conditions}</small>
                        </Card.Body>
                        <Card.Footer>
                          <img src="https://img.icons8.com/ios-glyphs/30/null/user-location.png" />
                          {data?.location} {data?.state}
                        </Card.Footer>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-4 cart__footer mx-auto">
                  <div className="cart style2 my-5 my-lg-0">
                    <h2 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                      SELLER INFORMATION
                    </h2>

                    <div className="cart-note">
                      <div className="solid-border">
                        <h1>SELLER</h1>
                        <hr />
                        <h5>
                          <label
                            htmlFor="CartSpecialInstructions"
                            className="cart-note__label small--text-center flex align-items-center"
                          >
                            <img
                              src="https://img.icons8.com/plasticine/100/null/gender-neutral-user--v1.png"
                              width={50}
                            />{' '}
                            {user?.firstName} {user?.lastName}
                          </label>
                        </h5>
                        <Link href="tel:2348134460259">
                          <button className="btn">call : 2348134460259</button>
                        </Link>{' '}
                        <div className="row my-3">
                          <span className="col-6 col-sm-6 ">
                            <strong>Price</strong>
                          </span>
                          <span className="col-6 col-sm-6 text-lg text-right">
                            <span className="money">&#8358;{data?.price}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Alert
            key="danger"
            variant="danger"
            style={{ margin: '200px 100px' }}
          >
            loading...
          </Alert>
        )}
      </Layout>
    </PageAuthentication>
  );
}
