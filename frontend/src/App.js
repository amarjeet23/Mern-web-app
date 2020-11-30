import React from "react";
import Shirt from "./images/p1.jpg";
import data from "./data";
const App = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              amazona
            </a>
          </div>
          <div>
            <a href="cart.html">cart</a>
            <a href="sign.html">signin</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img
                      className="medium"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star f-o"></i>
                      </span>
                      <span>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">
          <div>All right reserved</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
