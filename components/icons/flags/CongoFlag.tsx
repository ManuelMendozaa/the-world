import React from 'react';

export default function CongoFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_215_2519)">
        <path
          d="M256 0C114.615 0 0 114.615 0 256C0 293.807 8.1958 329.701 22.9077 362L362 22.9077C329.701 8.19579 293.807 0 256 0Z"
          fill="#6DA544"
        />
        <path
          d="M362 22.9077L22.9077 362C48.7278 418.687 94.6187 464.304 151.5 489.77L489.77 151.5C464.304 94.6188 418.687 48.7278 362 22.9077Z"
          fill="#FFDA44"
        />
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 218.777 504.056 183.409 489.77 151.5L151.5 489.77C183.409 504.056 218.777 512 256 512Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_215_2519">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
