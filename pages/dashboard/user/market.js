import React, { useEffect, useState, Fragment } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import UserLayout from "../../../components/user/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationInput from "../../../components/Confirmation";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/router";

const UserMarket = () => {
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [packageId, setPackageId] = useState();

  useEffect(() => {
    const fetchSell = async () => {
      try {
        const response = await fetch("/sell/user/package", {
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
    fetchSell();
  }, []);

  const pay = async (id) => {
    try {
      const response = await fetch(`/sell/pay/${id}`, {
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
      if (window !== undefined) window.location.replace(`${res.msg}`);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePackage = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/sell/delete/${id}`, {
        method: "DELETE",
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
      setIsLoading(false);
      toast.success(res.msg);
      router.reload();
    } catch (err) {
      setIsLoading(false);
      toast.error(err);
    }
  };
  return (
    <UserLayout>
      <Container>
        <Fragment>
          <Row>
            {data?.map((product) => (
              <Col sm={12} md={12} lg={12} key={product.id}>
                <Card className="product-card">
                  <Carousel>
                    {typeof product?.files == "string"
                      ? JSON.parse(product?.files).map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              // src={`data:image/png;base64,${image}`}
                              src={image}
                              alt={`Product ${product.title}`}
                              style={{ height: "300px" }}
                            />
                          </Carousel.Item>
                        ))
                      : null}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                      &#x20A6;
                      {product?.price}
                    </Card.Text>
                    <Card.Text>{product?.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text>
                      Created on:{" "}
                      {new Date(product?.created_at).toLocaleDateString()}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      {product?.paid == true ? (
                        <Button disabled variant="primary">
                          PAID
                        </Button>
                      ) : product?.paid == false ? (
                        <Button
                          variant="error"
                          onClick={() => pay(product?.id)}
                        >
                          PAY NOW
                        </Button>
                      ) : null}
                      {isLoading ? (
                        <Button variant="error" disabled>
                          ...
                        </Button>
                      ) : (
                        <Button
                          variant="error"
                          onClick={() => {
                            setPackageId(product?.id);
                            setConfirmation(true);
                          }}
                        >
                          DELETE
                        </Button>
                      )}
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Fragment>
        {confirmation ? (
          <Modal show={true}>
            <ConfirmationInput
              setConfirmation={setConfirmation}
              action={deletePackage}
              title="to delete sell packages"
              packageId={packageId}
            />
          </Modal>
        ) : null}
      </Container>
    </UserLayout>
  );
};

export default UserMarket;
