import React from 'react';

export default function BoliviaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_273)">
        <path
          d="M512 256.001C512 224.687 506.368 194.69 496.077 166.958L256 155.827L15.923 166.957C5.632 194.69 0 224.687 0 256.001C0 287.315 5.632 317.312 15.923 345.044L256 356.175L496.077 345.045C506.368 317.312 512 287.315 512 256.001Z"
          fill="#FFDA44"
        />
        <path
          d="M256 512.001C366.071 512.001 459.906 442.529 496.077 345.044H15.9229C52.0939 442.529 145.929 512.001 256 512.001Z"
          fill="#6DA544"
        />
        <path
          d="M15.9229 166.958H496.078C459.906 69.473 366.071 0.000976562 256 0.000976562C145.929 0.000976562 52.0939 69.473 15.9229 166.958V166.958Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_273">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0 0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
