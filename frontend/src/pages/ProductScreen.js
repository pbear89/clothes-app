import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../components/Ratings";
import data from "../services/data";

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Producto no encontrado </div>;
  }
  return (
    <div>
        <Link to="/" className="small">Back to Results</Link>
      <div className="row top">
        <div className="col-2">
          <img 
            className="large" 
            src={product.image} 
            alt={product.name} 
          />
        </div>

        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Ratings rating={product.rating}></Ratings>
            </li>
            <li>
              <h2>Price :</h2> ${product.price}
            </li>
            <li>
              <h2>Description :</h2> <p>{product.description}</p>
            </li>
          </ul>
        </div>

        <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div>Price</div>
                            <div className="price">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Status</div>
                            <div>
                                {product.countInStock > 0 ? (
                                    <span className="success">In Stock</span>
                                ) : (
                                    <span className="error">Unavailable</span>
                                )}
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="primary block">Add to Card</button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
