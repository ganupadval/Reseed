import { Link } from "react-router-dom";
function Sellnow() {
  return (
    <>
      <section class="content-block" style={{ backgroundColor: "#00bba7"}}>
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
              <div
                class="item"
                data-scrollreveal="enter top over 0.4s after 0.1s"
              >
               {/* <h1 class="callactiontitle">
                  {" "}
                  Sell Your Books On Our Site{" "}
                  <span class="callactionbutton" ><Link to="/sellnow">Recommend Books</Link></span>
                </h1> */}
                <h1 class="callactiontitle">
                  {" "}
                  Sell Your Books On Our Site{" "}
                  <span class="callactionbutton" ><Link to="/sellnow">Sell Now</Link></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sellnow



