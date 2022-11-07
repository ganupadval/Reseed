import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      {/* <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form> */}
      <div>
        <NavBar />
      </div>

      <div style={{ "margin-top": "175px" }}>
        <form onSubmit={loginUser}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", margin: "auto" }}>
              <div>
                <h2 className="title" style={{ textAlign: "center" }}>
                  {" "}
                  Login{" "}
                </h2>
              </div>
              <div class="">
                <label for="exampleInputEmail1">Username</label>
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  style={{ "box-Sizing": "100px" }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Enter Password"
                  style={{ boxSizing: "10px" }}
                />
              </div>
              <div style={{ "text-align": "center" }}>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
