import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';

function MaltaPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title m-4'>Malta Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/europe/malta/marsaxlokk-malta-shutterstock1929820274.jpg?w=1920&h=940' alt='albaniaPhoto'></img>
        <h3 className='title_of_list'>Pick a destination</h3>
        <div className='first_part'>
          <svg width="318" height="32" viewBox="0 0 318 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_5)">
              <path d="M19 10.5L4 3.33975V20.6603L19 13.5V10.5ZM313.061 13.0607C313.646 12.4749 313.646 11.5251 313.061 10.9393L303.515 1.3934C302.929 0.807611 301.979 0.807611 301.393 1.3934C300.808 1.97919 300.808 2.92893 301.393 3.51472L309.879 12L301.393 20.4853C300.808 21.0711 300.808 22.0208 301.393 22.6066C301.979 23.1924 302.929 23.1924 303.515 22.6066L313.061 13.0607ZM17.5 13.5H312V10.5H17.5V13.5Z" fill="#BF9D83" />
            </g>
            <defs>
              <filter id="filter0_d_3_5" x="0" y="0.954058" width="317.5" height="30.0919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
              </filter>
            </defs>
          </svg>

          <ol className='list_of_cities'>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-valletta/' target='_blank' alt= "img" rel="noreferrer">VALLETA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.myguidemalta.com/sights/siggiewi' target='_blank' alt= "img" rel="noreferrer">SIGGIEWI</a></li>
            <li className='item_city'><a className='link_to_city' href='https://lifepart2andbeyond.com/how-to-visit-the-hagar-qim-and-mnajdra-temples-in-malta/' target='_blank' alt= "img" rel="noreferrer">ĦAĠAR QIM TEMPLES</a></li>
            <li className='item_city'><a className='link_to_city' href='https://agirlenroute.com/2022/12/mellieha-malta.html' target='_blank' alt= "img" rel="noreferrer">MELLIEHA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.earthtrekkers.com/is-the-blue-grotto-worth-seeing/' target='_blank' alt= "img" rel="noreferrer">THE BLUE GROTTO</a></li>
          </ol>

          <svg width="335" height="32" viewBox="0 0 335 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_6)">
              <path d="M316 13.5L331 20.6603L331 3.33975L316 10.5L316 13.5ZM4.93933 10.9393C4.35354 11.5251 4.35354 12.4749 4.93933 13.0607L14.4853 22.6066C15.0711 23.1924 16.0208 23.1924 16.6066 22.6066C17.1924 22.0208 17.1924 21.0711 16.6066 20.4853L8.12131 12L16.6066 3.51472C17.1924 2.92893 17.1924 1.97919 16.6066 1.3934C16.0208 0.807613 15.0711 0.807613 14.4853 1.3934L4.93933 10.9393ZM317.5 10.5L5.99999 10.5L5.99999 13.5L317.5 13.5L317.5 10.5Z" fill="#BF9D83" />
            </g>
            <defs>
              <filter id="filter0_d_3_6" x="0.499992" y="0.95406" width="334.5" height="30.0919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_6" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_6" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

          <div className='second_part'>
            <section className='first_line'>
              <div className='star'>
            <svg width="110" height="99" viewBox="0 0 110 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5_3)">
<path d="M55 0L66.8992 34.5491H105.406L74.2534 55.9017L86.1526 90.4509L55 69.0983L23.8474 90.4509L35.7466 55.9017L4.59401 34.5491H43.1008L55 0Z" fill="#C69067"/>
</g>
<defs>
<filter id="filter0_d_5_3" x="0.593994" y="0" width="108.812" height="98.4509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3" result="shape"/>
</filter>
</defs>
</svg>
      <h4 className='title_h4'>Best time to Travel</h4>
      <p className='paragraf'>Spring or autumn for pleasant weather and fewer tourists in Malta.
</p>
      </div>
           
           
            </section>
        <h2 className='header2'>Here are some key details about the country:</h2>
                <div className='info'>
                <p className='info_item'><span style={{fontWeight: 'bold'}}>1.Location and Geography:</span> Malta is a small archipelago situated in the Mediterranean Sea, south of Italy. It consists of three main islands: Malta, Gozo, and Comino. The country boasts a picturesque coastline, crystal-clear waters, and a unique blend of European and North African influences.</p>
                <img className='landscapes' src='https://www.mapsland.com/maps/europe/malta/large-detailed-tourist-map-of-malta.jpg' alt= "img"></img> 
                <img className='landscapes' src='https://play-lh.googleusercontent.com/APHMR4nkrFjj8tlbFGrhvvoy8UbhdL2zdw9DGj1iTIXqM8KqbkIc3Fy20_mdXhQMzQ' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>2.Language:</span> Malta's official languages are Maltese and English, with Maltese being the national language and widely spoken, alongside English.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>3.Population:</span> Malta has a population of approximately 514,564 people as of 2021. Despite being one of the smallest countries in the world, it has a relatively high population density.</p>
               <img className='landscapes' src='https://www.property-malta.biz/Content/blobid1554378190132.jpg' alt= "img"></img>
               <img className='landscapes' src='https://as2.ftcdn.net/v2/jpg/01/91/06/21/1000_F_191062139_JmLvvZWPosOFSuC1gqCDGbUhUzi7LGYV.jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>4.The capital and largest city of Malta.</span> The capital and largest city of Malta is Valletta. Located on the eastern coast of the main island, Valletta is a UNESCO World Heritage. </p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>5.History:</span> Malta has a rich history spanning thousands of years, with influences from various civilizations. It has been inhabited since prehistoric times and has witness</p>
               <img className='landscapes' src='https://martinrandall.ontigerbay.co.uk/admin/CMS/resize/resize.ashx?f=malta-main-image-13.jpg&w=0&h=0' alt= "img"></img>
               <img className='landscapes' src='https://media.istockphoto.com/id/1193032698/photo/malta-carnival-2019.jpg?s=612x612&w=0&k=20&c=jISXhfYS-HdZmxVmEkO4pJQzU_L8JK7bCInf0X_nhDQ=' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>6.Culture:</span> Malta has a rich and diverse culture influenced by its history and Mediterranean location. It showcases vibrant traditions, folklore, and festivities, including religious celebrations, music, art, and a renowned culinary scene with local specialties.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>7.Tourism:</span> Malta is a popular tourist destination known for its stunning landscapes, historic sites, and vibrant culture. Visitors are drawn to its ancient temples, picturesque cities like Valletta, beautiful beaches, clear waters for diving, and charming villages on the islands of Malta, Gozo, and Comino.</p>
               <img className='landscapes' src='https://iseemalta.com/wp-content/uploads/2021/05/landing-page-scaled.jpg' alt= "img"></img>
               <img className='landscapes' src='https://cdn-attachments.timesofmalta.com/3d4abf3facfb3189a91f8c5ed04647314d460c6a-1684146558-18d75323-1920x1280.png' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>8.Economy:</span> Malta has a small but highly industrialized economy. Key sectors include tourism, financial services, manufacturing, and information technology. The country has seen significant economic growth in recent years, attracting foreign investment and maintaining a strong focus on innovation and entrepreneurship.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>9.Cuisine:</span>Maltese cuisine is a delightful blend of Mediterranean flavors and influences from nearby countries. Traditional dishes include rabbit stew (fenkata), pastizzi (flaky pastries filled with ricotta or mushy peas), and ftira (Maltese bread topped with various ingredients).</p>
               <img className='landscapes' src='https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/maltese_macaroon.jpg?itok=tKT1DHvl' alt= "img"></img>
               <img className='landscapes' src='https://www.malta-guide.net/images/Walk-in-Malta.jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>10.Nature and Outdoor Activities:</span> Malta offers a variety of outdoor activities and natural beauty. Visitors can explore stunning coastal cliffs, go snorkeling or diving in crystal-clear waters, hike through picturesque countryside, and visit nature reserves teeming with birdlife.</p>
              
              </div>
          </div>
      </div>
      <div className='footerCountry'><Footer/></div>
    </div>
  );
}

export default MaltaPage;





