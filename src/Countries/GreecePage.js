import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';
export default function GreecePage() {
    return (
      <div className='pageContainer'>
        <div><Navbar /></div>
        <div className='header1'>
          <h3 className='title'>Greece Travel Guide</h3>
        </div>
        <div className='content_of_cities'>
          <img className='imageHeader' src='https://media.istockphoto.com/id/510967662/ro/fotografie/santorini-apus-de-soare-%C3%AEn-satul-zori-din-oia-grecia.jpg?s=612x612&w=0&k=20&c=O0X5sV0XSWMPwMZw4wB3s-M67vylYUPlhym394YcZag=' alt="img"></img>
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
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Athens' target='_blank' alt= "img" rel="noreferrer">ATHENS</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Cephalonia' target='_blank' alt= "img" rel="noreferrer">KEFALONIA</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Milos' target='_blank' alt= "img" rel="noreferrer">MILOS</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Paros' target='_blank' alt= "img" rel="noreferrer">PAROS</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Santorini' target='_blank' alt= "img" rel="noreferrer">SANTORINI</a></li>
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
  <path d="M55 0L66.8992 34.5491H105.406L74.2534 55.9017L86.1526 90.4509L55 69.0983L23.8474 90.4509L35.7466 55.9017L4.59401 34.5491H43.1008L55 0Z" fill="#C69067"/>
  </g>
  <defs>
  <filter id="filter0_d_5_3" x="0.593994" y="0" width="108.812" height="98.4509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
        <p className='paragraf'>Mid-April to October is the best time to visit Greece.</p>
        </div>
             
             
              </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
                  <div className='info'>
                  <p className='info_item'><span style={{fontWeight: 'bold'}}>1.Location and Geography:</span> Greece is located at the crossroads of Europe, Asia, and Africa. It consists of a mainland peninsula and a large number of islands scattered throughout the Ionian and Aegean Seas. The country is known for its rugged mountains, including the famous Mount Olympus, the mythical home of the Greek gods.</p>
                  <img className='landscapes' src='https://thumbs.dreamstime.com/b/athens-pinned-map-europe-photo-may-be-used-as-illustration-traveling-theme-43880029.jpg' alt= "img"></img> 
                  <img className='landscapes' src='https://img.directbooking.ro/getimage.ashx?f=Statiuni&w=600&h=399&file=Statiune_7520_Insula%20Santorini47759bad-5745-4588-b6bf-e80353b988d5.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>2.Language:</span> Greek is the official language of the country and is one of the oldest recorded languages in the world. The Greek alphabet is also widely used in science, mathematics, and other fields.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>3.Population:</span> As of my last update in September 2021, the population of Greece was estimated to be around 10.4 million people. However, please note that population figures are constantly changing due to factors such as birth rates, death rates, immigration, and emigration.</p>
                 <img className='landscapes' src='https://www.offidocs.com/images/greecesantoriniisland.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://cdn.travelsafe-abroad.com/wp-content/uploads/iStock-1419626160.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>4.The capital city of Greece is Athens, a vibrant metropolis that blends ancient landmarks with modern infrastructure.</span> Other major cities include Thessaloniki, Patras, Heraklion, and Larissa.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>5.History:</span>  Greece is often considered the cradle of Western civilization. Ancient Greece was home to influential philosophers, mathematicians, and scholars, including Socrates, Plato, Aristotle, and Archimedes. The city-states of Athens, Sparta, and Corinth were major centers of Greek civilization.</p>
                 <img className='landscapes' src='https://i.pinimg.com/1200x/49/df/d5/49dfd591598ecc215e6c1ee9442da569.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://www.historyhit.com/app/uploads/2020/08/drink.jpg?x87969' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>6.Culture:</span>Mythology: Greek mythology plays a significant role in the country's cultural heritage. The tales of gods, heroes, and mythical creatures have inspired countless works of art, literature, and philosophy throughout history.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>7.Tourism:</span> Greece is a major tourist destination, attracting visitors with its combination of history, culture, natural beauty, and warm hospitality. Tourism is a vital sector of the Greek economy.</p>
                 <img className='landscapes' src='https://grecia.de-weekend.ro/wp-content/uploads/2016/01/poze-grecia-5.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://www.offidocs.com/images/flaggreeceblue.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>8.Economy:</span>Greece is a parliamentary republic, and its political system is based on a democratic constitution. The President is the head of state, and the Prime Minister is the head of government.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>9.Cuisine:</span> Greek cuisine is known for its use of fresh ingredients, olive oil, herbs, and traditional recipes passed down through generations. Some popular dishes include moussaka, souvlaki, tzatziki, Greek salad, and baklava.</p>
                 <img className='landscapes' src='https://www.travellens.co/content/images/size/w2000/format/webp/2022/03/Mykonos.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://imagine-paliouri-village.booked.net/data/Photos/OriginalPhoto/14029/1402951/1402951151/Seaside-Paradise-Villa-Paliouri-Exterior.JPEG' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>10.Nature and Outdoor Activities:</span> Greece boasts a diverse and beautiful natural landscape, characterized by stunning coastlines, picturesque islands, rugged mountains, and lush greenery. The country's natural beauty has been an inspiration for art, literature, and mythology for thousands of years.</p>
                </div>
            </div>
        </div>
        <div className='footerCountry'><Footer /></div>
      </div>
    )
  }