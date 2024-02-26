import React from 'react';

export default function BurkinaFasoFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 513 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_399)">
        <path
          d="M0.988281 256.001C0.988281 114.617 115.604 0.000976562 256.988 0.000976562C398.372 0.000976562 512.988 114.617 512.988 256.001C501.858 256.001 256.988 289.392 256.988 289.392L0.988281 256.001Z"
          fill="#D80027"
        />
        <path
          d="M512.988 256.001C512.988 397.385 398.372 512.001 256.988 512.001C115.604 512.001 0.988281 397.385 0.988281 256.001"
          fill="#6DA544"
        />
        <path
          d="M256.987 166.958L276.324 226.476H338.911L288.279 263.262L307.617 322.784L256.987 285.999L206.356 322.784L225.697 263.262L175.064 226.476H237.648L256.987 166.958Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_399">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0.988281 0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
