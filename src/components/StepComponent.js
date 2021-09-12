import React from 'react'
import { LeftArrow, RightArrow } from "./ArrowComponent"
import { Link } from 'react-router-dom'

const StepComponent = (props) => {
    const { prevDisabled, nextDisabled, current, pathBefore, pathAfter } = props;
    const STEP_AMOUNT = 9;
    return (
        <div className="pagination-cont">
            <div className="pagination-step">{current}{" "} de {" "} {STEP_AMOUNT}</div>
            <div className="pagination">
                <div className="pagination-left">
                    <Link to={current - 1 === 0 ? "/" : `${pathBefore}`}
                        className={[
                            "navigation-button",
                            prevDisabled ? "navigation-button--disabled" : ""
                        ].join(" ")}
                    >
                        <div className="pagination__icon">
                            Anterior
                        </div>
                    </Link>
                </div>
                <div className="pagination__page">
                    <ul className="navigation">
                        {new Array(STEP_AMOUNT).fill(true).map((v, i) => (
                            <li
                                className={[
                                    "navigation-item",
                                    i + 1 === current ? "navigation-item--active" : ""
                                ].join(" ")}
                                key={i}
                            />
                        ))}
                    </ul>
                </div>
                <div className="pagination-right">
                    <Link to={`/${pathAfter}`}
                        className={[
                            "navigation-button",
                            nextDisabled ? "navigation-button--disabled" : ""
                        ].join(" ")}>
                        <div className="pagination__icon">
                            Siguiente
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StepComponent
