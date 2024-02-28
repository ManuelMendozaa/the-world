import React from 'react';

export default function EnglandFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_717)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M509.833 222.609H289.393H289.392V2.167C278.461 0.744 267.317 0 256 0C244.683 0 233.539 0.744 222.609 2.167V222.607V222.608H2.167C0.744 233.539 0 244.681 0 256C0 267.319 0.744 278.461 2.167 289.391H222.607H222.608V509.833C233.539 511.256 244.683 512 256 512C267.317 512 278.461 511.257 289.391 509.833V289.393V289.392H509.833C511.256 278.461 512 267.319 512 256C512 244.681 511.256 233.539 509.833 222.609V222.609Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_717">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
