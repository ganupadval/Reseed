
import axios from "axios";
import React from "react";

// const baseURL = "https://zenquotes.io/api/random";

// export default function Header2() {
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   if (!data) return null;

//   return (
//     <div>
//     {
//       data.map((item) => {
//         return (
//           <div key={item.id}>
//             <p>{item.q}</p>
//             <p>{item.a}</p>
//           </div>
//         );
//       })
//     }
      
     
//     </div>
//   );
// }




function Header() {
  return (
    <>
      {/* <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="text-homeimage">
              <div
                class="maintext-image"
                data-scrollreveal="enter top over 1.5s after 0.1s"
              >
                Quote Api
              </div>
              <div
                class="subtext-image"
                data-scrollreveal="enter bottom over 1.7s after 0.3s"
              >
                will go here
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="text-pageheader">
                <div
                  class="maintext-image"
                  data-scrollreveal="enter top over 1.5s after 0.1s"
                >
                  “A mind needs books as a sword needs a whetstone, if it is to keep its edge"
                </div>
                
                 
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Header;

