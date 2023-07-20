import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';
export default function FrancePage() {
    return (
      <div className='pageContainer'>
        <div><Navbar /></div>
        <div className='header1'>
          <h3 className='title'>France Travel Guide</h3>
        </div>
        <div className='content_of_cities'>
          <img className='imageHeader' src='https://destepti.ro/wp-content/uploads/2016/08/Paris11-696x464.jpg'></img>
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
              <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Paris' target='_blank' alt= "img" rel="noreferrer">PARIS</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/French_Riviera' target='_blank' alt= "img" rel="noreferrer">FRENCH RIVIERA</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Colmar' target='_blank' alt= "img" rel="noreferrer">COLMAR</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Bordeaux' target='_blank' alt= "img" rel="noreferrer">BORDEAUX</a></li>
              <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Provence' target='_blank' alt= "img" rel="noreferrer">PROVENCE</a></li>
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
        <p className='paragraf'>April to October is the best time to visit France.</p>
        </div>
             
             
              </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
                  <div className='info'>
                  <p className='info_item'><span style={{fontWeight: 'bold'}}>1.Location and Geography:</span> France has a diverse landscape, ranging from the flat plains in the north to the rugged mountains in the south (the Alps and the Pyrenees). The country is bordered by the Atlantic Ocean to the west, the English Channel to the northwest, Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and Andorra to the east and south.</p>
                  <img className='landscapes' src='https://www.internationalcitizens.com/wp-content/uploads/2022/06/iStock-530487018.jpg' alt= "img"></img> 
                  <img className='landscapes' src='https://4.bp.blogspot.com/_2IU2Nt4rD1k/S8Vdn1YFHnI/AAAAAAAABa8/-WveAGZSNuw/s1600/Turnul_Eiffel_Paris.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>2.Language:</span> French is the official language of France, and it is spoken by the majority of the population. Numerous regional languages and dialects are also spoken across the country, such as Breton, Alsatian, Occitan, and Corsican.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>3.Population:</span>As of my last update in September 2021, France had a population of around 67 million people.</p>
                 <img className='landscapes' src='https://cdn.kimkim.com/files/a/content_articles/featured_photos/dd6ddfda2f79e54577a7586f0e0e64f8f2dd6b22/big-be78cf32de7dd606fb7545f2a1a3edc4.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://media.istockphoto.com/id/1185953092/ro/fotografie/principala-atrac%C8%9Bie-a-parisului-%C8%99i-a-%C3%AEntregii-europe-este-turnul-eiffel-%C3%AEn-razele.jpg?s=612x612&w=0&k=20&c=-o4Qnti_cSnrnlXXnXy-tL0CLedwweYdXe8DnOGIA6U=' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>4.The capital city of France is Paris, which is also the largest city in the country.</span> Other major cities include Marseille, Lyon, Toulouse, Nice, and Bordeaux.</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>5.History:</span> France has a long and storied history, with significant contributions to art, literature, philosophy, and science. It played a crucial role in various historical events, including the French Revolution in the late 18th century, which led to the establishment of the First French Republic.</p>
                 <img className='landscapes' src='https://img.theculturetrip.com/wp-content/uploads/2016/04/quai_de_lhorloge_paris_ile-de-france_140320.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://www.imagine-france.fr/images/customized-program.png' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>6.Culture:</span> France is renowned for its vibrant cultural scene. It has produced famous artists, writers, musicians, and philosophers throughout history. The Louvre Museum in Paris is one of the world's largest and most visited art museums, housing an extensive collection of art, including the iconic painting, "Mona Lisa."</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>7.Tourism:</span> France is a top tourist destination, attracting millions of visitors every year. Tourists flock to iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, Palace of Versailles, Mont Saint-Michel, and the French Riviera.</p>
                 <img className='landscapes' src='https://1.bp.blogspot.com/-kVUC-s3pbLc/TbCEij107ZI/AAAAAAAADpo/O5lSBaEMUiY/s1600/muzeul_luvru_paris.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://france1789.files.wordpress.com/2018/06/16.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>8.Economy:</span>  France is a unitary semi-presidential republic, where the President serves as the head of state, and the Prime Minister is the head of government. The French Parliament consists of two chambers: the National Assembly (lower house) and the Senate (upper house).</p>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>9.Cuisine:</span> French cuisine is celebrated globally for its sophistication and diversity. It is known for dishes such as baguettes, croissants, escargot, coq au vin, ratatouille, crème brûlée, and a wide range of cheeses and wines.</p>
                 <img className='landscapes' src='https://cdn.pixabay.com/photo/2016/02/24/04/59/french-restaurant-1219096_640.jpg' alt= "img"></img>
                 <img className='landscapes' src='https://www.telegraph.co.uk/content/dam/Travel/2018/June/Avignon-iStock-927065972.jpg' alt= "img"></img>
              <p className='info_item'><span style={{fontWeight: 'bold'}}>10.Nature and Outdoor Activities:</span> Austria is known for its stunning natural landscapes, particularly the majestic Alps that dominate the western and southern regions of the country. The Austrian Alps provide a range of recreational opportunities, including skiing, snowboarding, mountaineering, and hiking. The Alpine region is dotted with picturesque towns and villages. Austria is also home to numerous lakes, including Lake Neusiedl, Lake Wolfgang, and Lake Wörthersee, which attract tourists and locals for swimming, boating, and other water-based activities.</p>
                </div>
            </div>
        </div>
        <div className='footerCountry'><Footer /></div>
      </div>
    )
  }