import { useState, useEffect } from "react";

const getFormattedPrice = (price) => `₹${price.toFixed(2)}`;

function BookCondition() {
  const toppings = [
    {
      name: "Water spilled",
      price: 15,
    },
    {
      name: "Loose",
      price: 10,
    },
    {
      name: "Some Pages Missing",
      price: 25,
    },
    {
      name: "Edge worn",
      price: 20,
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  const [mrp, setMrp] = useState("");
  const handleChange2 = (e) => {
    setMrp(e.target.value);
  };

  const value = mrp - total;
  const [cost , setCost] = useState(0)
//   useEffect(() => {const tokenprice = ;
//   setCost(tokenprice)
// },[tokenprice])
  
  // const tokenprice = (5 / 100) * value;

  const [qr, setQr] = useState();
  // useEffect(() => {
  //   fetch("https://upiqr.in/api/qr", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Santanu Sinha",
  //       vpa: "santanu@ybl",
  //       amount: "20",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setQr(data));
  // }, []);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          id="mrp"
          name="mrp"
          onChange={handleChange2}
          value={mrp}
        />{" "}
        <br />
        <br />
        <ul className="toppings-list">
          {toppings.map(({ name, price }, index) => {
            return (
              <ol key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-₹{index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-₹{index}`}>{name}</label>
                  </div>
                </div>
              </ol>
            );
          })}
        </ul>
        {/* <br />
        <input type="text" id="" name="" value={value} /> <br />
        <br /> */}
        {/* <span style={{ width: "25%" }}>
          <label for="exampleInputEmail1">
            Token for Posting your book, 5% of your final price :
          </label>
          <input
            type="text"
            // value={tokenvalue}
            // placeholder="Book Title"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // onChange={(e) => setBookTitle(e.target.value)}
            style={{ width: "25%" }}
            value={cost}
            onChange={()=>{setCost((5 / 100) * value)}}
          />
          <br />
        </span> */}
        <br />
        
        
        <br />
      </form>
      <img
                className="w-1/2 h-full"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                  `upi://pay?pa=ganesh26padval@okicici&pn=GANESH%20PADVAL&am=${ 20
                  }.00&cu=INR`
                )}`}
                alt="upiQR"
              />
              <div>
          <input
            style={{ width: "300px", height: "40px" }}
            type="file"
            class="form-control"
            id="customFile"
          />
        </div>
    </div>
  );
}

export default BookCondition;
