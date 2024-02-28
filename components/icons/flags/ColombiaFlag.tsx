import React from 'react';

export default function ColombiaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_540)">
        <path
          d="M0 256C0 114.616 114.616 0 256 0C397.384 0 512 114.616 512 256L256 278.261L0 256Z"
          fill="#FFDA44"
        />
        <path
          d="M34.256 384C78.521 460.516 161.245 512 256 512C350.755 512 433.479 460.516 477.744 384L256 367.304L34.256 384Z"
          fill="#D80027"
        />
        <path
          d="M477.744 384C499.526 346.346 512 302.631 512 256H0C0 302.631 12.474 346.346 34.256 384H477.744Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_540">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
