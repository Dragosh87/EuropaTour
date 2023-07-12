import React from 'react';
import './AlbaniaPage.css';

function AlbaniaPage() {
  return (
    <div className='pageContainer'>
      <div className='header' style={{ flex: '0 0 15%', backgroundColor: '#f6ebe5' }}>
      <section className='container_menu'>
          <ul className='country_menu'>
            <li className='country_item'><a href='/'>HOME</a></li>
            <li className='country_item'><a href=''>NEXT COUNTRY</a></li>
          </ul>
        </section>
       <h3 className='title'>Albania Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
      <img className='imageHeader' src='https://www.danflyingsolo.com/wp-content/uploads/2017/04/AlbaniaPhotos2-3.jpg' alt='albaniaPhoto'></img>
            <h3>Pick a destination</h3>
          <div className='first_part'>
          <svg width="257" height="265" viewBox="0 0 257 265" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3)">
<path d="M252.707 249.707C253.098 249.317 253.098 248.683 252.707 248.293L246.343 241.929C245.953 241.538 245.319 241.538 244.929 241.929C244.538 242.319 244.538 242.953 244.929 243.343L250.586 249L244.929 254.657C244.538 255.047 244.538 255.681 244.929 256.071C245.319 256.462 245.953 256.462 246.343 256.071L252.707 249.707ZM17.0001 74L16.6782 73.0532L16.5898 73.0833L16.5085 73.1292L17.0001 74ZM131.475 10.9411L135.767 0.7252L124.233 1.2748L129.477 11.0363L131.475 10.9411ZM252 248C230.464 248 201.182 239.32 170.263 225.663C139.374 212.02 106.963 193.46 79.2028 173.809C51.4222 154.144 28.3813 133.445 16.1539 115.545C10.033 106.585 6.70796 98.4498 6.72855 91.5714C6.74883 84.7978 10.014 79.0921 17.4917 74.8708L16.5085 73.1292C8.48607 77.6579 4.75126 83.9834 4.72856 91.5654C4.70618 99.0424 8.29514 107.587 14.5024 116.673C26.9312 134.868 50.2028 155.731 78.0472 175.441C105.912 195.165 138.438 213.793 169.455 227.493C200.443 241.18 230.036 250 252 250V248ZM17.322 74.9468C28.9945 70.9781 41.7614 67.6104 54.4349 64.125C67.0893 60.6447 79.6447 57.0485 90.814 52.6332C113.088 43.8282 130.286 31.5898 131.427 10.0369L129.43 9.9312C128.357 30.1984 112.257 42.0062 90.0787 50.7733C79.0219 55.1441 66.5625 58.7154 53.9045 62.1966C41.2656 65.6725 28.4223 69.0602 16.6782 73.0532L17.322 74.9468Z" fill="#BF9D83"/>
</g>
<defs>
<filter id="filter0_d_1_3" x="0.728455" y="0.725189" width="256.272" height="263.639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
</filter>
</defs>
</svg>
         
          <ol className='list_of_cities'>
            <li className='item_city'>BERAT</li>
            <li className='item_city'>GJIROKASTER</li>
            <li className='item_city'>HIMARE</li>
            <li className='item_city'>KSAMIL</li>
            <li className='item_city'>THETH</li>
          </ol>
          </div>
      </div>
    </div>
  );
}

export default AlbaniaPage;





