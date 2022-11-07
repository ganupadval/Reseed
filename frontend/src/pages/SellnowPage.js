// import "../App.css";
import { useState } from "react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import BookCondition from "../components/BookCondition";

function SellnowPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [mobileNumber, setMobileNumber] = useState("");
  const [booktitle, setBookTitle] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const [bookimg, setBookimg] = useState("");
  const [transaction, setTransaction] = useState("");
  const [exp_price, setExp_Price] = useState("");
  const [message, setMessage] = useState("");

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
  const [cost, setCost] = useState(0);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          booktitle: booktitle,
          branch: branch,
          sem: sem,
          price: exp_price,

        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        //setMobileNumber("");
        setMessage(
          "Your book details uploaded successfully and will post on website once verified."
        );
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const options1 = [
    "Information Technology",
    "Computer Engineering",
    "Mechnical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
  ];

  const options2 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>
          <NavBar />
        </div>

        <div className="App">
          <div style={{ "margin-top": "125px", display: "flex" }}>
            <div
              className="col-md-3 center"
              style={{ alignItems: "center", margin: "auto" }}
            >
              <div>
                <h2 className="title"> Sell Now </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div style={{ width: "25%" }}>
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      value={name}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      // placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "25%" }}>
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="text"
                      value={email}
                      // placeholder="Email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "25%" }}>
                    <label for="exampleInputEmail1"> Book Title</label>
                    <input
                      type="text"
                      value={booktitle}
                      // placeholder="Book Title"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setBookTitle(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "25%" }}>
                    {/* <input
                      type="text"
                      value={booktitle}
                      // placeholder="Book Title"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setBookTitle(e.target.value)}
                    /> */}
                  </div>

                  <br />
                  <Autocomplete
                    options={options1}
                    style={{ width: "300px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Branch"
                        variant="outlined"
                      />
                    )}
                  />
                  <br />

                  <Autocomplete
                    options={options2}
                    style={{ width: "300px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Semester"
                        variant="outlined"
                      />
                    )}
                  />
                  <br />
                 
                  <div>
                    <label for="exampleInputEmail1"> Upload Book image</label>
                    <input
                      style={{ width: "300px", height: "40px" }}
                      type="file"
                      class="form-control"
                      id="customFile"
                    />
                  </div>
                  <div style={{ width: "25%" }}>
                    <label for="mrp"> Expected Price</label>
                    <input
                      type="text"
                      id="mrp"
                      name="mrp"
                      onChange={handleChange2}
                      value={mrp}
                    />{" "}
                  </div>
                  <div>
                    
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
                                <label htmlFor={`custom-checkbox-₹{index}`}>
                                  {name}
                                </label>
                              </div>
                            </div>
                          </ol>
                        );
                      })}
                    </ul>
                   
                    
                    
                  </div>

                  <p> Value according to your book condition ₹ {value}</p>
                  <br />
                 
                  <div>
                  <label for="token"> Token of ₹20 for uploading your book</label>
                 
                  </div>
                  
                  <img id="token"
                className="w-1/2 h-full"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                  `upi://pay?pa=ganesh26padval@okicici&pn=GANESH%20PADVAL&am=${ 20
                  }.00&cu=INR`
                )}`}
                alt="upiQR"
              />
              <div>
              <div>
              <br />
                  <label for="token"> Upload transaction Details: </label>
                  <br />
                  </div>
          <input
            style={{ width: "300px", height: "40px" }}
            type="file"
            class="form-control"
            id="customFile"
          /></div>
          <br /><br />
          <button type="submit" class="btn btn-primary">
                  Submit
                </button>

                  <div className="message">
                    {message ? <p>{message}</p> : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellnowPage;
