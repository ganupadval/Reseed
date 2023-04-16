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

export default function Shop() {
  const baseURL = "http://127.0.0.1:8000/test/";

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
          {/* <div style={{"textAlign":"center"}}>
            <a href="#" class="learn-more detailslearn">
              Recommend Book
              </a>
              <button type="submit"><Link to="/checkout">Recommend Book</Link></button>
            </div><br/> */}
        </div>
        <div class="underlined-title">
          <div class="editContent">
            <h1 class="text-center latestitems">BUY NOW</h1>
          </div>
          <div class="wow-hr type_short">
            <span class="wow-hr-h">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </div>
            <div>
              <h1 class="text-center latestitems">NEED A RECOMMENDATION ?</h1>
            </div>
            <center>
            <Link to="/recommend"><span>Click Here!!!</span></Link>
              
            </center>
            <br/>
          <div class="row">
            <div>
              {data.map((item) => {
                return (
                  <>
                    <div class="col-md-3" key={item.avg_rating}>
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
                            <StarRating avg_rating={item.avg_rating} />
                            <span class="edd_price">₹ {item.num_ratings}</span>
                          </span>
                          <div>
                            <button type="submit">
                            <Link to={{
                              pathname: '/checkout',
                              state: { bk: {title: item.title, price: item.num_ratings} }
                            }}>Purchase</Link>
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
