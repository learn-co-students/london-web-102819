import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({
  sushis,
  slicedIdx,
  increaseSliceIdx,
  eatSushi,
  checkHasBeenEaten
}) => {
  const slicedSushis = sushis.slice(slicedIdx, slicedIdx + 4);
  const renderSushis = slicedSushis.map(sushi => (
    <Sushi
      {...sushi}
      eatSushi={() => eatSushi(sushi.id)}
      hasBeenEaten={checkHasBeenEaten(sushi.id)}
    />
  ));

  return (
    <Fragment>
      <div className="belt">
        {renderSushis}
        <MoreButton handleClick={() => increaseSliceIdx()} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
