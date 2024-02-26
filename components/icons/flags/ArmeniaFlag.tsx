import React from 'react';

export default function ArmeniaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_129)">
        <path
          d="M512 256C512 224.686 506.368 194.689 496.077 166.957L256 155.826L15.923 166.956C5.633 194.689 0 224.686 0 256C0 287.314 5.633 317.311 15.923 345.043L256 356.174L496.077 345.044C506.368 317.311 512 287.314 512 256Z"
          fill="#0052B4"
        />
        <path
          d="M256 512C366.071 512 459.906 442.528 496.077 345.043H15.9231C52.0941 442.528 145.929 512 256 512Z"
          fill="#FF9811"
        />
        <path
          d="M15.9231 166.957H496.078C459.906 69.472 366.071 0 256 0C145.929 0 52.0941 69.472 15.9231 166.957V166.957Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_129">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
