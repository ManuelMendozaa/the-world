import React from 'react'

export default function BulgariaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 513 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_181_395)">
        <path
          d="M512.989 256C512.989 224.686 507.357 194.689 497.066 166.957L256.989 155.826L16.9123 166.956C6.62226 194.689 0.989258 224.686 0.989258 256C0.989258 287.314 6.62226 317.311 16.9123 345.043L256.989 356.174L497.066 345.044C507.357 317.311 512.989 287.314 512.989 256Z"
          fill="#496E2D"
        />
        <path
          d="M256.989 512C367.06 512 460.895 442.528 497.066 345.043H16.9121C53.0831 442.528 146.918 512 256.989 512Z"
          fill="#D80027"
        />
        <path
          d="M16.9121 166.957H497.067C460.895 69.472 367.06 0 256.989 0C146.918 0 53.0831 69.472 16.9121 166.957V166.957Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_395">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0.989258)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
