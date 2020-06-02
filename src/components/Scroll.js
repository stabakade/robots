import React from 'react';

// we can apply scrolling feature to any component now
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '700px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;