import React from "react";

import Sellnow from "../components/Sellnow";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

export default function Checkout(props) {
  const item = props.location.state.bk;
  return (
    <div>
      <header class="item header margin-top-0">
        <div class="wrapper">
          <NavBar />
          <Header2 />
        </div>
      </header>
      <section class="item content">
        <div class="container toparea">
          <div class="underlined-title">
            <div class="editContent">
              <h1 class="text-center latestitems">MAKE PAYMENT</h1>
            </div>
            <div class="wow-hr type_short">
              <span class="wow-hr-h">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div id="edd_checkout_wrap" class="col-md-8 col-md-offset-2">
            <div id="edd_checkout_form_wrap" class="edd_clearfix">
              <form
                id="edd_purchase_form"
                class="edd_form"
                action="#"
                method="POST"
              >
                <fieldset id="edd_checkout_user_info">
                  <legend>Personal Info</legend>
                  <p id="edd-email-wrap">
                    <label class="edd-label" for="edd-email">
                      Email Address
                      <span class="edd-required-indicator">*</span>
                    </label>
                    <input
                      class="edd-input required"
                      type="email"
                      name="edd_email"
                      placeholder="Email address"
                      id="edd-email"
                      value=""
                    />
                  </p>
                  <p id="edd-first-name-wrap">
                    <label class="edd-label" for="edd-first">
                      First Name <span class="edd-required-indicator">*</span>
                    </label>
                    <input
                      class="edd-input required"
                      type="text"
                      name="edd_first"
                      placeholder="First name"
                      id="edd-first"
                      value=""
                      required=""
                    />
                  </p>
                  <p id="edd-last-name-wrap">
                    <label class="edd-label" for="edd-last">
                      {" "}
                      Last Name{" "}
                    </label>
                    <input
                      class="edd-input"
                      type="text"
                      name="edd_last"
                      id="edd-last"
                      placeholder="Last name"
                      value=""
                    />
                  </p>
                </fieldset>
                <fieldset id="edd_purchase_submit">
                <p id="edd_final_total_wrap">
                    <strong>Book Title:</strong>
                    <span
                      class="edd_cart_amount"
                      data-subtotal="11.99"
                      data-total="11.99"
                    >
                     -  {item.title}
                    </span>
                  </p>
                  <p id="edd_final_total_wrap">
                    <strong>Purchase Total:</strong>
                    <span
                      class="edd_cart_amount"
                      data-subtotal="11.99"
                      data-total="11.99"
                    >
                      ₹ {item.price}
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
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Sellnow />
      <Footer />
    </div>
  );
}
