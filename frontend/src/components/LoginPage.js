import React, { useState, useEffect } from "react";
import validation from "./validation";


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title"> Login Account </h2>{" "}
        </div>{" "}
        <form className="form-wrapper">
          {/* <div className="name">
            <label className="label"> Full Name </label>{" "}
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handelchange}
            />{" "}
            {errors.fullname && <p className="error"> {errors.fullname} </p>}{" "}
          </div>{" "} */}
          {/* <div className="email">
            <label className="label"> Email </label>{" "}
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handelchange}
            />{" "}
            {errors.email && <p className="error"> {errors.email} </p>}{" "}
          </div>{" "}
          <div className="password">
            <label className="label"> Password </label>{" "}
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handelchange}
            />{" "}
            {errors.password && <p className="error"> {errors.password} </p>}{" "}
          </div>{" "}
          <button className="submit" onClick={handleFormSubmit}>
            Sign up{" "}
          </button>{" "} */}
          <div id="edd_checkout_form_wrap" class="edd_clearfix">
              <form
                id="edd_purchase_form"
                class="edd_form"
                action="#"
                method="POST"
              >
                <fieldset id="edd_checkout_user_info">
                  {/* <legend>Personal Info</legend> */}
                  <p id="edd-email-wrap">
                    {/* <label class="edd-label" for="edd-email">
                      Email Address
                      <span class="edd-required-indicator">*</span>
                    </label> */}<label className="label" class="edd-label" for="edd-first" > Username </label>{" "}
                    {/* <input
                      class="edd-input required"
                      type="email"
                      name="edd_email"
                      placeholder="Email address"
                      id="edd-email"
                      value=""
                    /> */}<input
              className="input"
              type="text"
              name="fullname"
             //   value={values.fullname}
             //   onChange={handelchange}
             />{" "}
                  </p>
                  {/* {errors.fullname && <p className="error"> {errors.fullname} </p>}{" "} */}
                  <p id="edd-first-name-wrap">
                    {/* <label class="edd-label" for="edd-first">
                      First Name <span class="edd-required-indicator">*</span>
                    </label> */}<label className="label" class="edd-label" for="edd-first"> Password </label>{" "}
                    {/* <input
                      class="edd-input required"
                      type="text"
                      name="edd_first"
                      placeholder="First name"
                      id="edd-first"
                      value=""
                      required=""
                    /> */}<input
              className="input"
              type="password"
              name="email"
            //   value={values.email}
            //   onChange={handelchange}
            />{" "}
            {/* {errors.email && <p className="error"> {errors.email} </p>}{" "} */}
                  </p>
                  {/* <p id="edd-last-name-wrap"> */}
                    {/* <label class="edd-label" for="edd-last">
                      {" "}
                      Last Name{" "}
                    </label> */}
                    {/* <label className="label" class="edd-label" for="edd-first"> Password </label>{" "} */}
                    {/* <input
                      class="edd-input"
                      type="text"
                      name="edd_last"
                      id="edd-last"
                      placeholder="Last name"
                      value=""
                    /> */}
                    {/* <input
              className="input"
              type="password"
              name="password" */}
            {/* //   value={values.password}
            //   onChange={handelchange} */}
            {/* />{" "} */}
            {/* {errors.password && <p className="error"> {errors.password} </p>}{" "} */}
                  {/* </p>
                </fieldset>
                <fieldset id="edd_purchase_submit"> */}
                  {/* <p id="edd_final_total_wrap">
                    <strong>Purchase Total:</strong>
                    <span
                      class="edd_cart_amount"
                      data-subtotal="11.99"
                      data-total="11.99"
                    >
                      $11.99
                    </span>
                  </p>
                  <input type="hidden" name="edd_action" value="purchase" />
                  <input type="hidden" name="edd-gateway" value="manual" />
                  <input
                    type="submit"
                    class="edd-submit button"
                    id="edd-purchase-button"
                    name="edd-purchase"
                    value="Purchase"
                  /> */}
                  <button className="submit" type="submit"
                    class="edd-submit button"
                    id="edd-purchase-button"
                    name="edd-purchase"
                    value="Purchase">
            Login{" "}
          </button>{" "}
                </fieldset>
              </form>
            </div>
        </form>{" "}
      </div>{" "}
    </div>
  );


// export default SignupForm;
