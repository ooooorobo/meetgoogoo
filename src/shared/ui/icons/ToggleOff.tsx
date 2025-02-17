import * as React from 'react';
import type { SVGProps } from 'react';
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={24} fill="none" viewBox="0 0 48 24" {...props}>
    <rect width={48} height={24} fill="#AFAAB1" rx={12} />
    <circle cx={12} cy={12} r={9} fill="#fff" />
    <path
      fill="#fff"
      d="M30.11 11.758q0 1.318-.481 2.308-.48.985-1.336 1.518-.85.534-1.934.533-1.09 0-1.945-.533-.85-.533-1.33-1.518-.474-.99-.475-2.308 0-1.32.475-2.303.48-.99 1.33-1.523.856-.534 1.945-.534 1.085 0 1.934.534.855.533 1.336 1.523.48.984.48 2.303m-6.481 0q0 1.06.357 1.822.358.762.973 1.154.62.393 1.4.399.78-.006 1.395-.399.621-.392.978-1.154.358-.762.358-1.822 0-1.066-.358-1.828-.357-.762-.978-1.155a2.54 2.54 0 0 0-1.395-.392q-.78 0-1.4.392-.615.393-.973 1.155-.357.762-.357 1.828m8.027-4.242h5.11v.937H32.71v2.836h3.668v.926H32.71V16h-1.055zm6.68 0h5.11v.937H39.39v2.836h3.668v.926H39.39V16h-1.055z"
    />
  </svg>
);
export default SvgToggleOff;
