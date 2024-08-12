import { useTheme } from "styled-components";

export const SensorIcon = () => {
  const { colors } = useTheme();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_15427"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_15427)">
        <path
          d="M10.0001 12.7778C9.54175 12.7778 9.14939 12.6146 8.823 12.2882C8.49661 11.9619 8.33342 11.5695 8.33342 11.1112C8.33342 10.6528 8.49661 10.2605 8.823 9.93408C9.14939 9.60769 9.54175 9.4445 10.0001 9.4445C10.4584 9.4445 10.8508 9.60769 11.1772 9.93408C11.5036 10.2605 11.6667 10.6528 11.6667 11.1112C11.6667 11.5695 11.5036 11.9619 11.1772 12.2882C10.8508 12.6146 10.4584 12.7778 10.0001 12.7778ZM6.04175 14.1737C5.7223 13.7431 5.46883 13.2709 5.28133 12.757C5.09383 12.2431 5.00008 11.6945 5.00008 11.1112C5.00008 9.72228 5.48619 8.54172 6.45842 7.5695C7.43064 6.59728 8.61119 6.11117 10.0001 6.11117C11.389 6.11117 12.5695 6.59728 13.5417 7.5695C14.514 8.54172 15.0001 9.72228 15.0001 11.1112C15.0001 11.6945 14.9063 12.2501 14.7188 12.7778C14.5313 13.3056 14.2779 13.7778 13.9584 14.1945C13.8195 14.3751 13.6355 14.4653 13.4063 14.4653C13.1772 14.4653 12.9723 14.3751 12.7917 14.1945C12.639 14.0417 12.5591 13.8542 12.5522 13.632C12.5452 13.4098 12.6112 13.1945 12.7501 12.9862C12.9445 12.7084 13.0904 12.4132 13.1876 12.1007C13.2848 11.7882 13.3334 11.4584 13.3334 11.1112C13.3334 10.1945 13.007 9.40978 12.3542 8.757C11.7015 8.10422 10.9167 7.77783 10.0001 7.77783C9.08342 7.77783 8.29869 8.10422 7.64592 8.757C6.99314 9.40978 6.66675 10.1945 6.66675 11.1112C6.66675 11.4723 6.71883 11.8056 6.823 12.1112C6.92717 12.4167 7.06953 12.7084 7.25008 12.9862C7.38897 13.1945 7.45147 13.4132 7.43758 13.6424C7.42369 13.8716 7.34036 14.0626 7.18758 14.2153C7.02092 14.382 6.823 14.4619 6.59383 14.4549C6.36467 14.448 6.18064 14.3542 6.04175 14.1737ZM3.68758 16.5487C3.06258 15.8126 2.56953 14.9827 2.20841 14.0591C1.8473 13.1355 1.66675 12.1528 1.66675 11.1112C1.66675 9.95839 1.8855 8.87505 2.323 7.86117C2.7605 6.84728 3.35425 5.96533 4.10425 5.21533C4.85425 4.46533 5.73619 3.87158 6.75008 3.43408C7.76397 2.99658 8.8473 2.77783 10.0001 2.77783C11.1529 2.77783 12.2362 2.99658 13.2501 3.43408C14.264 3.87158 15.1459 4.46533 15.8959 5.21533C16.6459 5.96533 17.2397 6.84728 17.6772 7.86117C18.1147 8.87505 18.3334 9.95839 18.3334 11.1112C18.3334 12.1528 18.1529 13.1389 17.7917 14.0695C17.4306 15.0001 16.9376 15.8334 16.3126 16.5695C16.1598 16.7362 15.9723 16.8195 15.7501 16.8195C15.5279 16.8195 15.3334 16.7362 15.1667 16.5695C15.014 16.4167 14.9341 16.2257 14.9272 15.9966C14.9202 15.7674 14.9931 15.5626 15.1459 15.382C15.6181 14.7987 15.9897 14.1459 16.2605 13.4237C16.5313 12.7014 16.6667 11.9306 16.6667 11.1112C16.6667 9.25005 16.0209 7.67367 14.7292 6.382C13.4376 5.09033 11.8612 4.4445 10.0001 4.4445C8.13897 4.4445 6.56258 5.09033 5.27092 6.382C3.97925 7.67367 3.33341 9.25005 3.33341 11.1112C3.33341 11.9306 3.46883 12.698 3.73966 13.4132C4.0105 14.1285 4.38897 14.7778 4.87508 15.3612C5.02786 15.5417 5.10078 15.7466 5.09383 15.9757C5.08689 16.2049 5.00008 16.4028 4.83341 16.5695C4.66675 16.7362 4.4723 16.816 4.25008 16.8091C4.02786 16.8021 3.84036 16.7153 3.68758 16.5487Z"
          fill={colors.blue500}
        />
      </g>
    </svg>
  );
};
