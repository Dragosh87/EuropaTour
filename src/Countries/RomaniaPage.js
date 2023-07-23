import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';

function RomaniaPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title m-4'>Romania Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://content.r9cdn.net/rimg/dimg/81/ee/e112fbd1-city-27633-1656c96ae00.jpg?crop=true&width=1020&height=498' alt='romaniaPhoto'></img>
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
            <li className='item_city'><a className='link_to_city' href='https://www.planetware.com/romania/top-rated-attractions-things-to-do-in-bucharest-rom-1-2.htm' target='_blank' alt="img" rel="noreferrer">BUCHAREST</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.romanianfriend.com/attractions/brasov-city-guide-top-things-to-do-places-to-visit' target='_blank' alt="img" rel="noreferrer">BRASOV</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.romaniaexperience.com/top-things-to-see-and-do-in-constanta-romania/' target='_blank' alt="img" rel="noreferrer">CONSTANTA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.farawayworlds.com/stories/things-to-do-in-cluj-napoca' target='_blank' alt="img" rel="noreferrer">CLUJ-NAPOCA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.romanianfriend.com/attractions/timisoara-what-to-do-guide' target='_blank' alt="img" rel="noreferrer">TIMISOARA</a></li>
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
              <p className='paragraf'>Spring and autumn offer pleasant weather for travel in Romania, avoiding extreme temperatures and crowds.
              </p>
            </div>


          </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
          <div className='info'>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>1.Location and Geography:</span> Romania is located in Southeast Europe, bordered by Bulgaria, Serbia, Hungary, Ukraine, Moldova, and the Black Sea. It encompasses diverse landscapes including the Carpathian Mountains, Transylvania, Danube Delta, and the rolling hills of the Romanian Plain.</p>
            <img className='landscapes' src='https://wonderingmaps.com/wp-content/uploads/romania_geography.png' alt="img"></img>
            <img className='landscapes' src='https://pbs.twimg.com/media/EQ-LASFWoAEYSjU.jpg:large' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>2.Language:</span> The official language of Romania is Romanian, a Romance language belonging to the Eastern Romance branch, spoken by the majority of the population and recognized as their mother tongue.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>3.Population:</span> Romania's population of around 19 million reflects its vibrant and diverse society. From the scenic countryside to the bustling cities, the people of Romania contribute to its rich cultural heritage and dynamic atmosphere.</p>
            <img className='landscapes' src='https://gdsit.cdn-immedia.net/2017/02/proteste-romania.jpg' alt="img"></img>
            <img className='landscapes' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/19/bucharest.jpg?w=700&h=-1&s=1' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>4.The capital and largest city of Romania.</span> The capital and largest city of Romania is Bucharest. It is a vibrant metropolis known for its eclectic architecture, rich history, lively nightlife, and cultural attractions such as the Palace of Parliament. </p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>5.History:</span> Romania has a rich history that includes Dacian and Roman influences, medieval kingdoms, Ottoman rule, independence in 1877, communist era under Ceaușescu, and a transition to democracy in 1989.</p>
            <img className='landscapes' src='https://deih43ym53wif.cloudfront.net/peles-castle-romania-shutterstock_285846593_17246fb12a.jpeg' alt="img"></img>
            <img className='landscapes' src='https://us.123rf.com/450wm/grigory_bruev/grigory_bruev1812/grigory_bruev181200039/116658802-gomel-belarus-people-man-and-women-in-national-belarusian-folk.jpg?ver=6' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>6.Culture:</span> Romanian culture is a blend of influences from Dacian, Roman, Byzantine, Ottoman, and Western European civilizations. It is known for folk traditions, music, dance, cuisine, Orthodox Christianity, historical landmarks, and literary figures like Mircea Eliade and Constantin Brâncuși.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>7.Tourism:</span> Romania offers diverse tourism opportunities with its stunning landscapes, including the Carpathian Mountains, Transylvania's castles, the Danube Delta, and vibrant cities like Bucharest. Visitors can enjoy historical sites, traditional villages, delicious cuisine, and warm hospitality.</p>
            <img className='landscapes' src='https://www.worldatlas.com/r/w1200/upload/46/a2/ab/shutterstock-294937292.jpg' alt="img"></img>
            <img className='landscapes' src='https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2020-10/ro_economy_growth_business_by_antonyesse_dreamstime.com_.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>8.Economy:</span> Romania has a developing mixed economy, with sectors such as services, industry, agriculture, and IT contributing to its GDP. It attracts foreign investments and benefits from EU membership, but challenges in corruption and regional disparities persist.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>9.Cuisine:</span>Romanian cuisine is a delightful blend of influences from Eastern Europe, Balkan, and Turkish cuisines. It features dishes like sarmale (stuffed cabbage rolls), mici (grilled sausages), mămăligă (polenta), and cozonac (sweet bread), reflecting its rich culinary heritage.</p>
            <img className='landscapes' src='https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-03/romanian_food_shutterstock.jpg' alt="img"></img>
            <img className='landscapes' src='https://miro.medium.com/v2/resize:fit:1400/1*8OOEuiLbDxfPg7srwvw_GQ.jpeg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>10.Nature and Outdoor Activities:</span> Romania boasts breathtaking natural beauty, offering a range of outdoor activities. From hiking in the Carpathian Mountains to exploring the Danube Delta's wildlife, and enjoying skiing in the winter, Romania is a paradise for nature lovers and adventure seekers.</p>

          </div>
        </div>
      </div>
      <div className='footerCountry'><Footer /></div>
    </div>
  );
}

export default RomaniaPage;





