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
import StarRating from "../components/Star";

export default function Recommender() {
    const baseURL = "http://127.0.0.1:8000/test/";
    const [book, setBook] = React.useState("");
    const [data, setData] = React.useState([]);
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let response = await fetch("http://localhost:8000/recommend/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_input: book,
          }),
        });
        let responseData = await response.json();
        setData(responseData);
        console.log(responseData)
      } catch (error) {
        console.error(error);
      }
    };
    
  if (!data) return null;

  return (
    <>
      <NavBar />
      <section class="item content" style={{ top: "500rem" }}>
        <div class="container toparea"></div>
        <div class="underlined-title">
          <form onSubmit={handleSubmit}>
            <div style={{ width: "40%", margin: "auto" }}>
              <div>
                <h1 class="text-center latestitems">
                  TELL US YOUR FAVOURITE BOOK
                </h1>
              </div>
              
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputfirstname"
                  placeholder="Enter Book Title"
                  onChange={(e) => setBook(e.target.value)}
                />
              </div>
              <div style={{ "text-align": "center" }}>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <br />
          <div class="row">
            <div>
              {data.map((item) => {
                return (
                  <>
                    <div class="col-md-3" >
                      <div class="productbox">
                        <div class="fadeshop">
                          <div style={{ display: "flex" }} class="maxproduct">
                            <img
                              style={{ margin: "auto" }}
                              src={item.image_url}
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="product-details">
                          <h1>{item.title}</h1>
                          <h6>{item.author}</h6>
                          <span class="price">
                            {/* <StarRating avg_rating={item.avg_rating} /> */}
                            {/* <span class="edd_price">₹ {item.num_ratings}</span> */}
                          </span>
                          <div>
                            <button type="submit">
                              <Link to="/checkout">Purchase</Link>
                            </button>
                          </div>
                        </div>
                      </div>
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
