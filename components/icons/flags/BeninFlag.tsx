import React from 'react';

export default function BeninFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_248)">
        <path
          d="M166.957 233.739L189.218 503.181C210.511 508.92 232.893 512 256 512C397.384 512 512 397.384 512 256L166.957 233.739Z"
          fill="#D80027"
        />
        <path
          d="M166.957 256L189.217 8.819C210.511 3.08 232.893 0 256 0C397.384 0 512 114.616 512 256H166.957Z"
          fill="#FFDA44"
        />
        <path
          d="M0 256C0 374.279 80.221 473.805 189.217 503.181V8.81897C80.221 38.195 0 137.721 0 256Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_248">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
