import React from 'react';

export default function EstoniaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_733)">
        <path
          d="M0 256C0 287.314 5.633 317.31 15.923 345.043L256 356.174L496.077 345.044C506.368 317.31 512 287.314 512 256C512 224.686 506.368 194.69 496.077 166.957L256 155.826L15.923 166.956C5.633 194.69 0 224.686 0 256H0Z"
          fill="black"
        />
        <path
          d="M256 0C145.929 0 52.094 69.472 15.923 166.957H496.078C459.906 69.472 366.071 0 256 0V0Z"
          fill="#0052B4"
        />
        <path
          d="M496.077 345.043H15.923C52.094 442.527 145.929 512 256 512C366.071 512 459.906 442.527 496.077 345.043Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_733">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
