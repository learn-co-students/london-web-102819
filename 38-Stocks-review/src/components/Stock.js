import React from "react";

const Stock = ({ name, price, ticker, type, handleOnClick }) => (
  <div>
    <div className="card" onClick={handleOnClick}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{`${ticker}: ${price}`}</p>
      </div>
    </div>
  </div>
);

export default Stock;
