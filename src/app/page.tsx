export default function Home() {
  console.log("Home component rendered");

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Testing EasyPay</h1>
      <form action="/api/easypay" method="GET" className="flex flex-col gap-4">
        <input
          type="number"
          name="amt"
          placeholder="Enter amount"
          required
          className="px-4 py-2 text-black rounded-md border"
        />
        <button
          type="submit"
          className="px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}


 //
// export default function Home() {
//   const handleClick = () => {
//           const rid = "EP_1762514248206_1";
//       const crn = "CRN_1762514248206_1";
//       const amt = 320;
//       // ✅ Redirect to your Next.js route that posts to Axis
//       window.location.href = `https://aavin-api.boom123.in/bapi/orders/easypay/initiate?rid=${rid}&crn=${crn}&amt=${amt}`;

//       // 🔸 Or, if you want to go directly to Axis (for UAT testing only):
//       // window.location.href = "https://uat-etendering.axisbank.co.in/easypay2.0/frontend/api/payment";
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white">
//       <h1 className="text-3xl font-bold mb-4">Testing EasyPay</h1>
//       <button
//         onClick={handleClick}
//         className="px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }
//
