import React, { Fragment } from "react";

const CustomArrow = ({ direction, onClick }) => {
  return (
    <Fragment>
      {direction === "left" ? (
        <div
          className={`slider-arrow slider-arrow-${direction}`}
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 451.847 451.847"
            enableBackground="new 0 0 451.847 451.847;"
            space="preserve"
          >
            <g>
              <path
                d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
		c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
		c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div
          className={`slider-arrow slider-arrow-${direction}`}
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 451.846 451.847"
            enableBackground="new 0 0 451.846 451.847;"
            space="preserve"
          >
            <g>
              <path
                d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
              />
            </g>
          </svg>
        </div>
      )}
    </Fragment>
  );
};

export default CustomArrow;
