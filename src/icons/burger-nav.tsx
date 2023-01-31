import * as React from "react";

const BurgerNavIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18.466}
    height={9.4}
    {...props}
  >
    <defs>
      <clipPath id='a'>
        <path data-name='Rectangle 60' fill='none' d='M0 0h18.466v9.4H0z' />
      </clipPath>
    </defs>
    <g data-name='Group 12555' clipPath='url(#a)' fill='#fff'>
      <path
        data-name='Path 90'
        d='M12.374 1.044H.522A.522.522 0 1 1 .522 0h11.852a.522.522 0 0 1 0 1.044'
      />
      <path
        data-name='Path 91'
        d='M17.944 5.225H.522a.522.522 0 1 1 0-1.044h17.422a.522.522 0 1 1 0 1.044'
      />
      <path
        data-name='Path 92'
        d='M17.944 9.399H.522a.522.522 0 0 1 0-1.044h17.422a.522.522 0 0 1 0 1.044'
      />
    </g>
  </svg>
);

export default BurgerNavIcon;
