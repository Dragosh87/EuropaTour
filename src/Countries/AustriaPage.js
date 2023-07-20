import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';

export default function AustriaPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title'>Austria Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://a.cdn-hotels.com/gdcs/production135/d1579/cbe33240-f585-11e8-b8fa-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium' alt='austriaPhoto'></img>
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
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Viena' target='_blank' alt= "img" rel="noreferrer">VIENA</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Salzburg' target='_blank' alt= "img" rel="noreferrer">SALZBURG</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Innsbruck' target='_blank' alt= "img" rel="noreferrer">INNSBRUCK</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Graz' target='_blank' alt= "img" rel="noreferrer">GRAZ</a></li>
            <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Linz' target='_blank' alt= "img" rel="noreferrer">LINZ</a></li>
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
      <p className='paragraf'>May to October and December to February for winter sports!</p>
      </div>
           
           
            </section>
        <h2 className='header2'>Here are some key details about the country:</h2>
                <div className='info'>
                <p className='info_item'><span style={{fontWeight: 'bold'}}>1.Location and Geography:</span> Austria is bordered by eight countries: Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein. The country is known for its stunning Alpine landscapes, as it is primarily situated in the eastern Alps. It also has several rivers, including the Danube, which flows through the capital city of Vienna.</p>
                <img className='landscapes' src='https://st5.depositphotos.com/3916541/64390/v/600/depositphotos_643901790-stock-illustration-map-illustration-of-austria-with.jpg' alt= "img"></img> 
                <img className='landscapes' src='https://4.bp.blogspot.com/-ukBHiuG1Ff8/TV207ZZXQsI/AAAAAAAADA4/JZ_e0P5ubBI/s1600/Tyrol_Austria_Primavara%2B%25282%2529.jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>2.Language:</span> The official language of Austria is German. Austrians generally speak a variety of German known as Austrian German. English is also widely understood, particularly in urban areas and among the younger population.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>3.Population:</span> As of my last knowledge update in September 2021, Austria had an estimated population of around 9 million people. The country has a relatively high population density, with the majority of the population residing in urban areas, particularly in Vienna and other major cities.</p>
               <img className='landscapes' src='https://2.bp.blogspot.com/-pBl__B2prLE/TV20z0dPN0I/AAAAAAAADAw/jNNxTC6L4Fk/s1600/Tyrol_Austria_Peisaje.jpg' alt= "img"></img>
               <img className='landscapes' src='https://tourex.ro/wp-content/uploads/2015/09/Salzburg-Austria-6.jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>4.The capital of Austria is Vienna, which is also its largest city.</span> Vienna is renowned for its rich history, stunning architecture, and cultural heritage. Other major cities in Austria include Graz, Linz, Salzburg, and Innsbruck.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>5.History:</span>  Austria has a long and eventful history. It was once the center of the Habsburg Empire, one of the most influential European dynasties. Austria was also a part of the Austro-Hungarian Empire until its dissolution after World War I. The country experienced various political changes in the 20th century and was annexed by Nazi Germany during World War II.</p>
               <img className='landscapes' src='https://cdn.eventegg.com//images/travel/3/108/dramatic-landscape-before-a-sunset-over-salzburg.jpg' alt= "img"></img>
               <img className='landscapes' src='https://img.freepik.com/premium-photo/beautiful-view-vienna-located-austria_265989-1289.jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>6.Culture:</span> Austria has a rich cultural heritage, and its contributions to music, art, and literature are globally recognized. The country is famously associated with classical music composers like Wolfgang Amadeus Mozart, Ludwig van Beethoven, and Franz Schubert. Vienna, in particular, is known as the "City of Music" due to its historical significance in classical music.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>7.Tourism:</span> Austria attracts numerous tourists each year due to its natural beauty, cultural heritage, and historical landmarks. The country offers a wide range of outdoor activities, including skiing, hiking, and exploring picturesque towns. Major tourist destinations in Austria include Vienna's historic center, Salzburg's old town (a UNESCO World Heritage site), the stunning Lake District, and the ski resorts of Tyrol.</p>
               <img className='landscapes' src='https://s1.1zoom.me/big0/990/Vienna_Houses_Evening_511466.jpg' alt= "img"></img>
               <img className='landscapes' src='https://media.istockphoto.com/id/104287957/es/foto/edificio-del-palacio-de-la-m%C3%BAsica-cl%C3%A1sica.jpg?s=612x612&w=0&k=20&c=uiTsa6-bya5S7OVv5Y8XQX2pq0yx6xFrQ8bV4Ay8Uqg=' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>8.Economy:</span> Austria is a federal parliamentary republic with a President as the head of state and a Chancellor as the head of government. The country has a highly developed and prosperous economy. It is known for its strong service sector, including finance, tourism, and high-quality healthcare. Austria is also known for its exports of machinery, vehicles, and other industrial products.</p>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>9.Cuisine:</span> Austrian cuisine is known for its hearty and flavorsome dishes, influenced by its neighboring countries and regional traditions. Here are some highlights of Austrian cuisine: Wiener Schnitzel, Strudel, Goulash. Austrian Wines: Austria has a long history of winemaking, particularly in the eastern region of Wachau, Kamptal, and Burgenland. Austrian wines, such as Grüner Veltliner and Riesling, are well-regarded internationally and often paired with Austrian cuisine.</p>
               <img className='landscapes' src='https://s3.envato.com/files/307891942/DSC_0859.jpg' alt= "img"></img>
               <img className='landscapes' src='https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg?cs=srgb&dl=pexels-rahat-ali-1493088.jpg&fm=jpg' alt= "img"></img>
            <p className='info_item'><span style={{fontWeight: 'bold'}}>10.Nature and Outdoor Activities:</span> Austria is known for its stunning natural landscapes, particularly the majestic Alps that dominate the western and southern regions of the country. The Austrian Alps provide a range of recreational opportunities, including skiing, snowboarding, mountaineering, and hiking. The Alpine region is dotted with picturesque towns and villages. Austria is also home to numerous lakes, including Lake Neusiedl, Lake Wolfgang, and Lake Wörthersee, which attract tourists and locals for swimming, boating, and other water-based activities.</p>
              </div>
          </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}