import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';

function ItalyPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title m-4'>Italy Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://www.mailtravel.co.uk/images/italy-hero' alt='albaniaPhoto'></img>
        <h3 className='title_of_list'>Pick a destination</h3>
        <div className='first_part'>
          <svg width="318" height="32" viewBox="0 0 318 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_5)">
              <path d="M19 10.5L4 3.33975V20.6603L19 13.5V10.5ZM313.061 13.0607C313.646 12.4749 313.646 11.5251 313.061 10.9393L303.515 1.3934C302.929 0.807611 301.979 0.807611 301.393 1.3934C300.808 1.97919 300.808 2.92893 301.393 3.51472L309.879 12L301.393 20.4853C300.808 21.0711 300.808 22.0208 301.393 22.6066C301.979 23.1924 302.929 23.1924 303.515 22.6066L313.061 13.0607ZM17.5 13.5H312V10.5H17.5V13.5Z" fill="#BF9D83" />
            </g>
            <defs>
              <filter id="filter0_d_3_5" x="0" y="0.954058" width="317.5" height="30.0919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <li className='item_city'><a className='link_to_city' href='https://traveltriangle.com/blog/best-places-to-visit-in-venice/' target='_blank' alt="img" rel="noreferrer">VENICE</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-milan/' target='_blank' alt="img" rel="noreferrer">MILAN</a></li>
            <li className='item_city'><a className='link_to_city' href='https://florencetips.com/tourist-attractions.html' target='_blank' alt="img" rel="noreferrer">FLORENCE</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-rome/' target='_blank' alt="img" rel="noreferrer">ROME</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-sardinia/' target='_blank' alt="img" rel="noreferrer">SARDINIA</a></li>
          </ol>

          <svg width="335" height="32" viewBox="0 0 335 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_6)">
              <path d="M316 13.5L331 20.6603L331 3.33975L316 10.5L316 13.5ZM4.93933 10.9393C4.35354 11.5251 4.35354 12.4749 4.93933 13.0607L14.4853 22.6066C15.0711 23.1924 16.0208 23.1924 16.6066 22.6066C17.1924 22.0208 17.1924 21.0711 16.6066 20.4853L8.12131 12L16.6066 3.51472C17.1924 2.92893 17.1924 1.97919 16.6066 1.3934C16.0208 0.807613 15.0711 0.807613 14.4853 1.3934L4.93933 10.9393ZM317.5 10.5L5.99999 10.5L5.99999 13.5L317.5 13.5L317.5 10.5Z" fill="#BF9D83" />
            </g>
            <defs>
              <filter id="filter0_d_3_6" x="0.499992" y="0.95406" width="334.5" height="30.0919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                  <path d="M55 0L66.8992 34.5491H105.406L74.2534 55.9017L86.1526 90.4509L55 69.0983L23.8474 90.4509L35.7466 55.9017L4.59401 34.5491H43.1008L55 0Z" fill="#C69067" />
                </g>
                <defs>
                  <filter id="filter0_d_5_3" x="0.593994" y="0" width="108.812" height="98.4509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3" result="shape" />
                  </filter>
                </defs>
              </svg>
              <h4 className='title_h4'>Best time to Travel</h4>
              <p className='paragraf'>Spring and autumn for mild weather, fewer crowds, and cultural festivals.
              </p>
            </div>


          </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
          <div className='info'>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>1.Location and Geography:</span> Italy is a country in Southern Europe, bordered by France, Switzerland, Austria, and Slovenia. It features the Alps in the north, rolling hills in the central regions, and a picturesque coastline along the Mediterranean. Its location offers a diverse geography, combining mountains, hills, and beautiful coastal areas.</p>
            <img className='landscapes' src='https://www.worldatlas.com/r/w1200/upload/2a/cf/fd/it-01.jpg' alt="img"></img>
            <img className='landscapes' src='https://learnlanguagesfromhome.com/wp-content/uploads/2022/06/italiano-1024x683.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>2.Language:</span> The primary language spoken in Italy is Italian. It is an official language of the country and holds cultural significance. Italian is known for its melodious nature and is spoken by the majority of the population.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>3.Population:</span> Italy has a population of approximately 60 million people. It is the fourth most populous country in Europe. The population is diverse, with various ethnic groups, and major cities like Rome, Milan, and Naples are densely populated.</p>
            <img className='landscapes' src='https://media.npr.org/assets/img/2021/09/17/ItalyGreenPassProtests-b286fcefd09e1617e70a3a25472fb4c93ce12dab-s1100-c50.jpg' alt="img"></img>
            <img className='landscapes' src='https://adventurefilledlife.com/wp-content/uploads/2017/11/rome-2462105_960_720-min.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>4.The capital and largest city of Italy.</span> The capital and largest city of Italy is Rome, known for its historical significance, iconic landmarks like the Colosseum and Vatican City, and vibrant cultural scene.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>5.History:</span> Italy has a rich and diverse history dating back to ancient times. It was home to the Roman Empire, witnessed the Renaissance, and experienced various invasions and kingdoms. Italy finally unified in 1861 and played a significant role in world history, art, and culture.</p>
            <img className='landscapes' src='https://lifeinitaly.com/wp-content/uploads/2018/08/06511v.jpg' alt="img"></img>
            <img className='landscapes' src='https://www.italiandualcitizenship.net/wp-content/uploads/2020/02/Italian-American-culture-and-traditions.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>6.Culture:</span> Italian culture is celebrated for its rich artistic heritage, vibrant music scene, iconic fashion industry, and renowned cuisine. Family and community play a central role, and Italians value leisurely enjoyment of life's pleasures, such as good food, wine, and socializing.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>7.Tourism:</span> Italian tourism is thriving, attracting millions of visitors annually. From historical landmarks like the Colosseum and the Vatican to picturesque coastal towns of the Amalfi Coast and the enchanting beauty of Tuscany, Italy offers a diverse range of attractions, art, culture, and culinary experiences.</p>
            <img className='landscapes' src='https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fff9195a6-a361-11ea-b184-d1e18278054a.jpg?crop=4053%2C2702%2C101%2C68' alt="img"></img>
            <img className='landscapes' src='https://static01.nyt.com/images/2022/07/19/multimedia/00italy-economy-1-copy/00italy-economy-1-superJumbo.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>8.Economy:</span> Italy has the eighth-largest economy in the world, characterized by a mix of modern industries and traditional sectors. It excels in fashion, design, manufacturing, and automotive sectors. Agriculture, tourism, and services also contribute significantly to the Italian economy.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>9.Cuisine:</span>Italian cuisine is internationally renowned and diverse, with regional specialties like pizza, pasta, gelato, and risotto. It emphasizes fresh, high-quality ingredients and simple preparation techniques. Italian cuisine has greatly influenced global food culture, making it a culinary destination for food lovers.</p>
            <img className='landscapes' src='https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F593%2F2649_pasta-01.jpg' alt="img"></img>
            <img className='landscapes' src='https://img.itinari.com/countries/it-italy.jpg?ch=DPR&dpr=2.625&w=1600&s=4e578ae84cb6dbb013ecea44eba0bad9' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>10.Nature and Outdoor Activities:</span> Italy offers diverse natural landscapes and outdoor activities. From hiking in the Dolomites to exploring the stunning coastline of Cinque Terre, or enjoying water sports on Lake Como, visitors can experience breathtaking mountains, picturesque lakes, and beautiful Mediterranean beaches.</p>

          </div>
        </div>
      </div>
      <div className='footerCountry'><Footer /></div>
    </div>
  );
}

export default ItalyPage;





