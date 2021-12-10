import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlow = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        d="M30 29a5 5 0 0 0 5-5 17 17 0 1 0-13 16.5 19 19 0 0 1-6-4.4c-1.9-2.2-3.2-5-4-8.4A7 7 0 1 1 25 24c0 2.1 2.7 5 5 5z"
        fill="#79C9FC"
      />
      <path
        d="M18 19a5 5 0 0 0-5 5A17 17 0 1 0 26 7.5a16 16 0 0 1 6 4.4c2 2.7 5 9 5 12.1a7 7 0 0 1-14 0c0-2.3-2.7-5-5-5z"
        fill="#FFC445"
      />
    </g>
  </svg>
);

export default SvgFlow;
