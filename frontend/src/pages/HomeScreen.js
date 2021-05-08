import React from 'react'
import Products from '../components/Products';
import data from "../services/data"

const HomeScreen = () => {
    return (
      <div>
        <div className="row center">
          {data.products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default HomeScreen
