import React from "react";
import { LeftArrow, RightArrow } from "./ArrowComponent";
import '../static/steps.scss';

const Pagination = (props) => {
  const { onLeftClick, onRightClick, step, totalSteps } = props;

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={onLeftClick}>
        <div className="pagination__icon">
          <LeftArrow />
        </div>
      </button>
      <div className="pagination__page">
        {step}{" "} de {" "} {totalSteps}
      </div>
      <button className="pagination__btn" onClick={onRightClick}>
        <div className="pagination__icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;