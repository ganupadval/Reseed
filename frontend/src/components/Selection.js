import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  //   BrowserRouter as Router,
  Switch,
  // Route,
  Link,
} from "react-router-dom";

function Selection() {
  const [branch, setBranch] = useState(true);
  const [sem, setSem] = useState(false);
  const [sub, setSub] = useState(false);
  const branchHandler = () => {
    setBranch(true);
    setSem(false);
    setSub(false);
  };
  const semHandler = () => {
    setBranch(false);
    setSem(true);
    setSub(false);
  };
  const subHandler = () => {
    setBranch(false);
    setSem(false);
    setSub(true);
  };
  return (
    <div>
      {/* <button onClick={descriptionHandler}>Descriptions </button>{" "} */}
      {branch && (
        <div class="item content">
          <div class="container toparea">
            <div class="row text-center">
              <div
                class="selection container"
                style={{ height: "270px", display: "grid" }}
              >
                <div class="text-center m-auto">
                  <h1> Select Your Branch </h1>{" "}
                </div>
                <div class="sub-list d-flex">
                  <div class="m-auto">
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      IT{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      CS{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      Mech{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      Civil{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      Chem{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn mx-4 btn-outline-info"
                      onClick={semHandler}
                    >
                      EXTC{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {/* <button onClick={reviewsHandler}>Reviews </button>{" "} */}
      {sem && (
        <div class="item content">
          <div class="container toparea">
            <div class="row text-center">
              <div
                class="selection container"
                style={{ height: "270px", display: "grid" }}
              >
                <div class="text-center m-auto">
                  <h1> Select Your Semester </h1>{" "}
                </div>
                <div class="sub-list d-flex">
                  <div class="m-auto">
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      1{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      2{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      3{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      4{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      5{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      6{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      7{" "}
                    </button>{" "}
                    <button
                      type="button"
                      class="btn xy mx-4 btn-outline-info"
                      onClick={subHandler}
                    >
                      8{" "}
                    </button>{" "}
                  </div>{" "}
                  <br />
                  <button
                    onClick={branchHandler}
                    type="button"
                    class="btn xy mx-4 btn-outline-info"
                  >
                    Go back to Branch{" "}
                  </button>{" "}
                  {/* <button onClick={branchHandler} type="button" class="btn xy mx-4 btn-outline-info">Go back to Branch </button>{" "} */}
                </div>{" "}
                {/* <button onClick={branchHandler} type="button" class="btn xy mx-4 btn-outline-info">Go back to Branch </button>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {sub && (
        <div class="item content">
          <div class="container toparea">
            <div class="row text-center">
              <div
                class="selection container"
                style={{ height: "270px", display: "grid" }}
              >
                <div class="text-center m-auto">
                  <h1> Select Subject </h1>{" "}
                </div>
                <div class="sub-list d-flex">
                  <div class="m-auto">
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">IP </Link>
                    </button>{" "}
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">CNS </Link>
                    </button>{" "}
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">EEB </Link>
                    </button>{" "}
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">SE </Link>
                    </button>{" "}
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">ADMT </Link>
                    </button>{" "}
                    <button type="button" class="btn xy mx-4 btn-outline-info">
                      <Link to="/shop">ADSA </Link>
                    </button>{" "}
                    {/* <button type="button" class="btn xy mx-4 btn-outline-info">
                    6{" "}
                  </button>{" "}
                  <button type="button" class="btn xy mx-4 btn-outline-info">
                    7{" "}
                  </button>{" "}
                  <button type="button" class="btn xy mx-4 btn-outline-info"><Link to="/shop">
                  8{" "}
                </Link></button>{" "} */}
                  </div>{" "}
                  <br />
                  <button
                    onClick={branchHandler}
                    type="button"
                    class="btn xy mx-4 btn-outline-info"
                  >
                    Go back to Branch{" "}
                  </button>{" "}
                  <button
                    onClick={semHandler}
                    type="button"
                    class="btn xy mx-4 btn-outline-info"
                  >
                    Go back to Sem{" "}
                  </button>{" "}
                </div>{" "}
                {/* <button onClick={branchHandler} type="button" class="btn xy mx-4 btn-outline-info">Go back to Branch </button>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
}
export default Selection;
