import React from 'react';

export default function CoteDIvoireFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M167.5 15.7098C69.7279 51.7316 0 145.723 0 256C0 366.277 69.7279 460.268 167.5 496.29V15.7098Z"
        fill="#FF9811"
      />
      <path
        d="M256 0C224.892 0 195.08 5.54849 167.5 15.7098V496.29C195.08 506.452 224.892 512 256 512C287.108 512 316.92 506.452 344.5 496.29V15.7098C316.92 5.54849 287.108 0 256 0Z"
        fill="#F0F0F0"
      />
      <path
        d="M344.5 496.29C442.272 460.268 512 366.277 512 256C512 145.723 442.272 51.7317 344.5 15.7098V496.29Z"
        fill="#6DA544"
      />
    </svg>
  );
}
