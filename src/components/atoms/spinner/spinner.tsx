import React from "react";

interface SpinnerProps extends React.DetailedHTMLProps<React.SVGProps<SVGSVGElement>, SVGSVGElement> {
  //Add additional prop definitions here
  spinnerColor?: RGB | RGBA | HEX,
  bgColor?: RGB | RGBA | HEX,
  bgOpacity?: number
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

const Spinner = ({ className = "", spinnerColor = "#3182ce", bgColor = "#E2E8F0", bgOpacity = .6, ...props }: SpinnerProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 38 38" stroke={spinnerColor} className={`${className} animate-spin`} {...props}>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity={bgOpacity} cx="18" cy="18" r="18" stroke={bgColor} />
          <path d="M36 18c0-9.94-8.06-18-18-18" />
        </g>
      </g>
    </svg>
  );
};

export default Spinner;
