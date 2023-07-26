import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';
import CommentBox from "../Components/coments/CommentBox";

function SpainPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title m-4'>Spain Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://jobs.webhelp.com/spain/wp-content/uploads/sites/11/2022/11/Madrid-Spain-desktop.jpg' alt='spainPhoto'></img>
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
            <li className='item_city'><a className='link_to_city' href='https://ticketshop.barcelona/' target='_blank' alt="img" rel="noreferrer">BARCELONA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.tripadvisor.com/Attractions-g187514-Activities-Madrid.html' target='_blank' alt="img" rel="noreferrer">MADRID</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.placesofjuma.com/things-to-do-in-valencia/' target='_blank' alt="img" rel="noreferrer">VALENCIA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-seville/' target='_blank' alt="img" rel="noreferrer">SEVILLE</a></li>
            <li className='item_city'><a className='link_to_city' href='https://www.voyagetips.com/en/things-to-do-in-granada/' target='_blank' alt="img" rel="noreferrer">GRANADA</a></li>
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
              <p className='paragraf'>The best time to travel to Spain is during the spring (April to June) and autumn (September to November).
              </p>
            </div>


          </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
          <div className='info'>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>1. Location and Geography:</span> Spain is located in southwestern Europe, sharing borders with Portugal, France, Andorra, and Morocco. It features diverse geography, including the Pyrenees Mountains, stunning coastlines, the Balearic and Canary Islands, and the vibrant cities of Madrid, Barcelona, and Seville.</p>
            <img className='landscapes' src='https://www.kids-world-travel-guide.com/images/xspain_map_ssk_383523706.jpg.pagespeed.ic.WaSw3t_xDU.jpg' alt="img"></img>
            <img className='landscapes' src='https://dp4g669tqdae4.cloudfront.net/content/uploads/2019/09/12161658/Espanol.-Translation-Spanish.-Language-hand-drawn-doodles-and-lettering.-1087621188_7013x4954.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>2. Language:</span> The official language of Spain is Spanish, also known as Castilian. It is spoken by the majority of the population, with regional languages such as Catalan, Galician, and Basque also being spoken.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>3. Population:</span> As of my knowledge cutoff in September 2021, the population of Spain is approximately 46.9 million people. However, please note that population figures may have changed since then, and it's always best to refer to up-to-date sources for the most accurate information.</p>
            <img className='landscapes' src='https://cdn.thinkwebcontent.com/articles/33527/800/33527-1674852942--olZLUn-jorge-fernandez-salas-z96i6JomMdQ-unsplash1.jpg' alt="img"></img>
            <img className='landscapes' src='https://bemadrid.com/wp-content/uploads/2021/12/madri.jpeg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>4. The capital and largest city of Spain.</span> The capital and largest city of Spain is Madrid. Located in the central part of the country, Madrid is known for its rich history, vibrant culture, world-class museums like the Prado, and iconic landmarks such as the Royal Palace and Puerta del Sol. </p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>5. History:</span> The history of Spain is rich and complex. It encompasses various civilizations, including the Romans, Visigoths, Moors, and the Kingdom of Castile. Spain experienced a golden age during the 16th and 17th centuries, followed by political turmoil, the Spanish Civil War, and the transition to democracy in the late 20th century..</p>
            <img className='landscapes' src='https://www.travellifedmc.es/wp-content/uploads/2020/06/spain-unesco.jpg.webp' alt="img"></img>
            <img className='landscapes' src='https://www.worldatlas.com/r/w1200/upload/4d/18/38/flamenco-seville-spain-leonov-o.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>6. Culture:</span> Spanish culture is diverse and influenced by its unique history. It is known for flamenco music and dance, bullfighting, traditional festivals like La Tomatina and San Fermin, delicious cuisine including tapas and paella, vibrant art and architecture by masters like Gaudi and Velázquez, and a passion for football.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>7. Tourism:</span> Spain is a popular tourist destination known for its rich cultural heritage, stunning architecture, beautiful beaches, vibrant cities, and diverse landscapes. Attractions include the Sagrada Familia in Barcelona, Alhambra in Granada, Prado Museum in Madrid, La Concha Beach in San Sebastian, and the vibrant streets of Seville.</p>
            <img className='landscapes' src='https://tourscanner.com/blog/wp-content/uploads/2022/04/best-places-to-visit-in-Spain.jpg' alt="img"></img>
            <img className='landscapes' src='https://images.shiksha.com/mediadata/images/articles/1665784093phpQlg9mf.jpeg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>8. Economy:</span> Spain has a mixed economy with sectors like tourism, manufacturing, services, and agriculture playing vital roles. It is the 14th largest global economy, heavily reliant on exports, and faces challenges such as unemployment and regional economic disparities.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>9. Cuisine:</span> Spanish cuisine is diverse and celebrated worldwide. It includes iconic dishes such as paella, tapas, tortilla española, and gazpacho. Olive oil, fresh seafood, cured meats like jamón ibérico, and regional specialties like pintxos in the Basque Country contribute to the rich and flavorful culinary tradition of Spain.</p>
            <img className='landscapes' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Paella_de_marisco_01_%28cropped%29_4.3.jpg/1200px-Paella_de_marisco_01_%28cropped%29_4.3.jpg' alt="img"></img>
            <img className='landscapes' src='https://sh-assets.holidu.com/imagecache/blog-photos/17598_Fill_800_800.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>10. Nature and Outdoor Activities:</span> Spain offers a wealth of natural beauty and outdoor activities. From the stunning beaches of Costa del Sol and Costa Brava to the rugged landscapes of the Pyrenees and Sierra Nevada mountains, it's a paradise for hikers, climbers, and water sports enthusiasts. National parks like Doñana and Teide provide opportunities for wildlife spotting and exploration.</p>

          </div>
        </div>
      </div>
      <CommentBox pageId="spain"/>
      <div><Footer /></div>
    </div>
  );
}

export default SpainPage;





