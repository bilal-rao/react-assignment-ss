import React from "react";

const Rating = ({ stars }) => {
  const starsArr = new Array(stars).fill(Math.floor(Math.random() * 100) + 1);
  return starsArr.map((star, index) => {
    return (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0049 0.499986C9.86475 0.49911 9.72713 0.537531 9.60769 0.61089C9.48824 0.684249 9.39174 0.78961 9.32913 0.915025L6.75296 6.06737L0.635776 7.00877C0.498851 7.02993 0.370462 7.0886 0.264847 7.17828C0.159231 7.26795 0.0805168 7.38512 0.0374324 7.5168C-0.005652 7.64848 -0.0114225 7.78953 0.0207607 7.92428C0.0529439 8.05904 0.121823 8.18226 0.21976 8.28026L4.45121 12.5117L3.50882 18.6357C3.48774 18.7727 3.50504 18.9129 3.5588 19.0407C3.61256 19.1685 3.70068 19.2788 3.81337 19.3596C3.92607 19.4403 4.05893 19.4882 4.19721 19.498C4.33548 19.5078 4.47377 19.4791 4.59671 19.415L10 16.5957L15.4034 19.415C15.5263 19.4791 15.6646 19.5078 15.8029 19.498C15.9411 19.4882 16.074 19.4403 16.1867 19.3596C16.2994 19.2788 16.3875 19.1685 16.4413 19.0407C16.495 18.9129 16.5123 18.7727 16.4912 18.6357L15.5489 12.5117L19.7803 8.28026C19.8782 8.18226 19.9471 8.05904 19.9793 7.92428C20.0115 7.78953 20.0057 7.64848 19.9626 7.5168C19.9195 7.38512 19.8408 7.26795 19.7352 7.17828C19.6296 7.0886 19.5012 7.02993 19.3643 7.00877L13.2471 6.06737L10.6709 0.915025C10.6091 0.791094 10.5141 0.686715 10.3965 0.613457C10.279 0.5402 10.1434 0.500924 10.0049 0.499986Z"
          fill="#485D65"
        />
      </svg>
    );
  });
};

export default Rating;
