import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';
import CommentBox from "../Components/coments/CommentBox";


export default function CezchRepPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title'>Czech Republic Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://media.cnn.com/api/v1/images/stellar/prod/171115114227-prague-pixabay.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618' alt='albaniaPhoto'></img>
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
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Praga' target='_blank' alt="img" rel="noreferrer">PRAGUE</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Brno' target='_blank' alt="img" rel="noreferrer">BRNO</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Ostrava' target='_blank' alt="img" rel="noreferrer">OSTRAVA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Liberec' target='_blank' alt="img" rel="noreferrer">LIBEREC</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Olomouc' target='_blank' alt="img" rel="noreferrer">OLOMOUC</a></li>
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
              <p className='paragraf'>April to October is the best time to visit the Czech Republic!</p>
            </div>


          </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
          <div className='info'>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>1. Location and Geography:</span>The Czech Republic, also known as Czechia, is a landlocked country located in Central Europe. It shares borders with Germany to the west, Austria to the south, Slovakia to the east, and Poland to the northeast. The country has a diverse geography, with the Bohemian Massif and Sudeten Mountains in the west, the fertile lowlands of Moravia in the east, and the Bohemian Forest along the southwestern border.</p>
            <img className='landscapes' src='https://media.istockphoto.com/id/177779605/photo/red-pushpin-on-map-of-czech-republic.jpg?s=170667a&w=0&k=20&c=1XG0SrgTDc_-tmBjxL3I44UEsJJLUCMTndbID3R2Q4c=' alt="img"></img>
            <img className='landscapes' src='https://images.pexels.com/photos/161077/prague-vencel-square-czech-republic-church-161077.jpeg?cs=srgb&dl=pexels-pixabay-161077.jpg&fm=jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>2. Language:</span> The official language of the Czech Republic is Czech, which is a West Slavic language. It is spoken by the majority of the population.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>3. Population:</span> As of my knowledge cutoff in September 2021, the estimated population of the Czech Republic is around 10.7 million people. However, please note that population figures can change over time due to various factors such as birth rates, mortality rates, migration, and other demographic factors.</p>
            <img className='landscapes' src='https://zilesinopti.ro/wp-content/uploads/2019/05/square_pub_6_.jpg' alt="img"></img>
            <img className='landscapes' src='https://media.istockphoto.com/id/1307621642/ro/fotografie/panorama-clasic%C4%83-praga-cu-turnul-podului-din-ora%C8%99ul-vechi-%C8%99i-podul-carol-peste-r%C3%A2ul.jpg?s=612x612&w=0&k=20&c=9nAKjcQvIqC5XQVOUc-MALl-LNMCDxgauWn7EDlMprU=' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>4. The capital of the Czech Republic is Prague.</span> Prague is not only the largest city in the country but also serves as its political, cultural, and economic center. The city is situated in the northwestern part of the country on the banks of the Vltava River. Prague is renowned for its stunning architecture, including Prague Castle, Charles Bridge, and the Old Town Square. It is a popular tourist destination and attracts millions of visitors each year.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>5. History:</span> The Czech Republic has a rich history, with roots dating back to the early Slavic tribes and the Great Moravian Empire in the 9th century. It was part of the Austro-Hungarian Empire until its dissolution after World War I, leading to the creation of Czechoslovakia. Czechoslovakia existed as an independent state until 1993 when it peacefully split into two separate countries: the Czech Republic and Slovakia.</p>
            <img className='landscapes' src='https://www.coratravel.ro/ProductContentFileHandler/700/700/praga-2391.jpg' alt="img"></img>
            <img className='landscapes' src='https://www.helloholidays.ro/blog/wp-content/uploads/2021/06/shutterstock_177943157.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>6. Culture:</span> The Czech Republic is known for its cultural contributions, including renowned figures such as Franz Kafka, Antonín Dvořák, and Milan Kundera. The country has a strong tradition in the arts, particularly in literature, music, and cinema.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>7. Tourism:</span> The Czech Republic is a popular tourist destination, attracting visitors with its stunning architecture, historical landmarks, and vibrant cultural scene. Prague, with its well-preserved medieval Old Town and iconic landmarks, is a major draw for tourists from around the world.</p>
            <img className='landscapes' src='https://www.passportandpixels.com/wp-content/uploads/2022/10/Ceske-Krumlov-260_pp.jpg' alt="img"></img>
            <img className='landscapes' src='https://www.sirius-project.eu/sites/default/files/inline-images/Untitled3.png' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>8. Economy:</span> The Czech Republic has a developed and industrialized economy. It is a member of the European Union and uses the Czech koruna (CZK) as its currency. The country has a strong manufacturing sector, particularly in automobiles, machinery, and electronics. It is also a significant exporter of beer, with famous Czech brands like Pilsner Urquell and Budweiser.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>9. Cuisine:</span> Czech cuisine is hearty, flavorful, and often influenced by the country's Central European neighbors. Some popular traditional dishes include: Svíčková, Bramboráky, Trdelník. Pilsner Beer: The Czech Republic is renowned for its beer culture, and Pilsner beer originated in the city of Plzeň. Czech beers are known for their high quality and rich flavor.</p>
            <img className='landscapes' src='https://www.rucksack.se/wp-content/uploads/2021/11/Prag-Tjeckien-Manifesto-Market-7-1080x719.jpg' alt="img"></img>
            <img className='landscapes' src='https://media.istockphoto.com/id/910862156/photo/river-canyon-with-dark-water-and-autumn-colorful-forest-horseshoe-bend-vltava-river-czech.jpg?s=612x612&w=0&k=20&c=zZmWjeb-VNUugCu_BpTn0DT7ndoddmzcJZBQVY2La1E=' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>10. Nature and Outdoor Activities:</span>The Czech Republic boasts diverse and picturesque natural landscapes, with lush forests, rolling hills, and scenic rivers. Some notable natural areas include: Krkonoše National Park, Moravian Karst, Český ráj (Bohemian Paradise).</p>
          </div>
        </div>
      </div>
      <CommentBox pageId="czech"/>
      <div><Footer /></div>
    </div>
  )
}