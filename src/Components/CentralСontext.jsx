import React from 'react';
import './Context.css';

function CentralContext() {
  return (
    
    <div  style={{ flex: '0 0 60%', backgroundColor: '#f6ebe5' }}>
      <section className="CentralContext">
      <img className='image' src='https://www.tosomeplacenew.com/wp-content/uploads/2021/12/Getting-ready-for-Europe-1024x819.jpg'/>
      <ul className='paragraf'>
        <li>Everyone dreams of traveling to Europe and there is a reason for that.
           Whether you're taking your first solo trip, backpacking on a budget, looking for a stylish getaway, or want to 
           explore new cities and cultures, Europe has something for everyone.
        </li>
        <li>
        Europe's peak tourist season is summer! From June to August, travelers from all over
         People flock to the region to enjoy the sights with beautiful weather.
        </li>
      </ul>
      </section>
      <ul className='paragraf2'>
        <li>
        However, if you're backpacking around Europe, the best time to travel to the region 
          It is in low season, from October to April. You will have better luck finding cheap flights 
          Hotels are also cutting their prices.
        </li>
        <li>
        But depending on the destination, winter can be a busy time of year for planners 
          a skiing holiday or wanting to experience European Christmas markets.
        </li>
      </ul>
      <div className='paragraf3'>
      <section className='titlu1'>
      <h2>WHAT TO EXPECT</h2>
      </section>
      <section className='image2'>
      <img className='img2' src='https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg'/>
      </section>
      </div>
      {/* <footer className='footer'>
        <img className='imgFooter' src='https://theblondeabroad.com/wp-content/uploads/2018/07/Footer-Manifesto.png'/>
      </footer> */}
    </div>
  );
}

export default CentralContext;