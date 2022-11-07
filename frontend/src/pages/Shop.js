import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../index.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import Sellnow from "../components/Sellnow";
// import NavBar from "./navBar";
import Header from "../components/Header2";

export default function Shop() {
  const baseURL = "http://127.0.0.1:8000/books/";

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <>
      <header class="item header margin-top-0">
        <div class="wrapper">
          <NavBar />
          <Header />
        </div>
      </header>

      <section class="item content">
        <div class="container toparea">
          <div class="underlined-title">
            <div class="editContent">
              <h1 class="text-center latestitems">OUR PRODUCTS</h1>
            </div>
            <div class="wow-hr type_short">
              <span class="wow-hr-h">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div class="row">
            <div>
              {data.map((item) => {
                return (
                  <>
                    <div class="col-md-4" key={item.id}>
                      <div class="productbox">
                        <div class="fadeshop">
                          <div
                            class="captionshop text-center"
                            style={{ display: "none" }}
                          >
                            <h3>{item.title}</h3>
                            <p>
                              This is a short excerpt to generally describe what
                              the item is about.
                            </p>
                            <p>
                              <a href="#" class="learn-more detailslearn">
                                <i class="fa fa-shopping-cart"></i> Purchase
                              </a>
                              <a href="#" class="learn-more detailslearn">
                                <i class="fa fa-link"></i> Details
                              </a>
                            </p>
                          </div>
                          <span class="maxproduct">
                            <img src={"http://localhost:8000"+item.image} alt="" />
                          </span>
                        </div>
                        <div class="product-details">
                          <a href="#">
                            <h1>{item.title}</h1>
                          </a>
                          <span class="price">
                            <span class="edd_price">{item.price}</span>
                          </span>
                          <div><button type="submit"><Link to="/checkout">Purchase</Link></button></div>
                        </div>
                      </div>
                    </div>

                    <div >
                      
                      <p>{item.im}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Sellnow />
      <Footer />
    </>
  );
}
