import React, { useState } from "react";
import NavBar from "../components/NavBar";

const SignupForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("http://127.0.0.1:8000/register/", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         "username": username,
  //         "email": email,
  //         "password": password
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setUsername("");
  //       setEmail("");
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        password: password,
      }),
    });
    let data = await response.json();

    if (response.status === 201) {
      alert("User Created");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <NavBar />
        </div>

        <div style={{ "margin-top": "175px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "20%", margin: "auto" }}>
              <div>
                <h2 className="title">Create Account</h2>
              </div>
              <div class="form-group">
                <label for="exampleInputfirstname">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputfirstname"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputLastname">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputLastname"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* {errors.email && <p className="error">{errors.email}</p>} */}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ "text-align": "center" }}>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
