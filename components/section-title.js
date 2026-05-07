import React from 'react';

export default function SectionTitle({text}) {
  return (
    <div sx={{
      textAlign: 'center',
      fontSize: '36px',
      fontFamily: `'Raleway', sans-serif`,
      background: `url('/section-head2.png')`,
      padding: '15px 0px',
      textTransform: 'uppercase',
      margin: '40px 0px',
      'span': {
        color: "#333",
        padding: "3px 5px",
        fontWeight: "400",
      }
    }}>{text}</div>
  );
}
