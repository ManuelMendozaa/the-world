import React from 'react';

export default function FrenchGuianaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 256C0 397.385 114.615 512 256 512C345.07 512 423.515 466.512 469.373 397.5L43.2952 113.5C15.9521 154.233 0 203.254 0 256Z"
        fill="#FCDD09"
      />
      <path
        d="M512 256C512 114.615 397.385 0 256 0C167.361 0 89.2444 45.0487 43.2952 113.5L469.373 397.5C496.307 356.965 512 308.315 512 256Z"
        fill="#6DA544"
      />
      <path
        d="M256.49 170L275.727 229.206H337.978L287.616 265.796L306.852 325L256.49 288.409L206.126 325L225.365 265.796L175 229.206H237.251L256.49 170Z"
        fill="#D80027"
      />
    </svg>
  );
}
