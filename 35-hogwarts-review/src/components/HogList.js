import React from "react";
import Hog from "./Hog";

const HogList = props => {
  return (
    <div className="ui cards">
      {props.hogs.map(hog => (
        <Hog key={hog.id} {...hog} hide={() => props.hideHog(hog)} />
      ))}
    </div>
  );
};

export default HogList;
