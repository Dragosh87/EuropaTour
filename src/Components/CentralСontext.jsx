import React from 'react';
import './Context.css';

function CentralContext() {
  return (
    <div className="CentralContext" style={{ flex: '0 0 60%', backgroundColor: '#EDCDBB' }}>
      <img className='image' src='https://www.tosomeplacenew.com/wp-content/uploads/2021/12/Best-Europe-travel-blog-tosomeplacenew-1024x819.jpg'/>
      <p className='hello'>Hello</p>
    </div>
  );
}

export default CentralContext;