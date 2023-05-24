import { useCallback } from "react";
import React from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { Button } from "reactstrap";

export const Razorpaydummy = (params) => {
  const Razorpay = useRazorpay();

  const createOrder = () => {
    let data = {
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    };
    axios
      .post(`https://api.razorpay.com/v1/orders`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("object");
  };
  const handlePayment = useCallback(async () => {
    const order = await createOrder(params);
    // const order = createOrder(params);

    const options = {
      key: "rzp_test_wt7kn6CPpHuho2",
      amount: "3000",
      currency: "INR",
      name: "astroVibra",
      description: "Test Transaction",
      image:
        "https://fastly.picsum.photos/id/705/200/300.jpg?hmac=pGByXwn1zuSUt1HtTv0qSR9KZYBBsB9tiYRJAzj_140",

      // order_id: params.id,
      order_id: "order_9A33XWu170gUtm",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "AstroVibra Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <Button color="success" onClick={handlePayment}>
        Payment Now
      </Button>
    </div>
  );
};
