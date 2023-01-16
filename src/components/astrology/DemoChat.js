import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";

function DemoChat() {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    // const order = await createOrder(params);

    // const options: RazorpayOptions = {
    const options = {
      key: 'rzp_test_8Q9MGMi8hVqdfZ',
      amount: '100',
      currency: 'INR',
      name: 'hello Corp',
      description: 'Test Transaction',
      image: 'http://example.com/your_logo',
      order_id: '',
      // order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Anjali",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    }

    const rzpay = new Razorpay(options);
    rzpay.open()
  }, [Razorpay])

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  )
}
export default DemoChat





// import React, { useCallback } from 'react'
// import useRazorpay from 'react-razorpay'

// function DemoChat() {
//   const Razorpay = useRazorpay()

//   const handlePayment = useCallback(() => {
//     const options = {
//       // key: 'rzp_test_8Q9MGMi8hVqdfZ,WaykuCx4m51bhiFu4FPpjG2D',
//       key: 'rzp_test_8Q9MGMi8hVqdfZ',
//       amount: '100',
//       currency: 'INR',
//       name: 'hello Corp',
//       description: 'Test Transaction',
//       image: 'https://example.com/your_logo',
//       order_id: '',
//       handler: (res) => {
//         console.log(res)
//       },
//       prefill: {
//         name: 'Anjali',
//         email: 'youremail@example.com',
//         contact: '9999999999',
//       },
//       notes: {
//         address: 'Razorpay Corporate Office',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     }

//     const rzpay = new Razorpay(options)
//     rzpay.open()
//   }, [Razorpay])

//   return (
//     <div className="App">
//       <button onClick={handlePayment}>Click</button>
//     </div>
//   )
// }
// export default DemoChat
