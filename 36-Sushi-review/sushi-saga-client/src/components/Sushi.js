import React, { Fragment } from "react";

const Sushi = ({ img_url, price, name, eatSushi, hasBeenEaten }) => {
  return (
    <div className="sushi">
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */

        hasBeenEaten ? null : (
          <img src={img_url} width="100%" onClick={eatSushi} />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
