import React from 'react';

export default function FranceFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_791)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 145.929 442.528 52.0941 345.043 15.9231V496.078C442.528 459.906 512 366.071 512 256V256Z"
          fill="#D80027"
        />
        <path
          d="M0 256C0 366.071 69.473 459.906 166.957 496.077V15.9231C69.473 52.0941 0 145.929 0 256Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_791">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
