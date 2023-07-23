import React from 'react';
import './Countries.css';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/footer';
export default function IcelandPage() {
  return (
    <div className='pageContainer'>
      <div><Navbar /></div>
      <div className='header1'>
        <h3 className='title'>Iceland Travel Guide</h3>
      </div>
      <div className='content_of_cities'>
        <img className='imageHeader' src='https://static.wixstatic.com/media/df9fb8_b1510fc657d94cef9e05566a6f7a8167~mv2.jpg/v1/fill/w_980,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/df9fb8_b1510fc657d94cef9e05566a6f7a8167~mv2.jpg' alt="img"></img>
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
            <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Reykjav%C3%ADk' target='_blank' alt="img" rel="noreferrer">REIKJAVIK</a></li>
            <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Sey%C3%B0isfj%C3%B6r%C3%B0ur' target='_blank' alt="img" rel="noreferrer">SEYDISFJORDUR</a></li>
            <li className='item_city'><a className='link_to_city' href='https://en.wikipedia.org/wiki/Sn%C3%A6fellsnes' target='_blank' alt="img" rel="noreferrer">SNAEFELLSNES</a></li>
            {/* <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Graz' target='_blank' alt= "img" rel="noreferrer">GRAZ</a></li>
              <li className='item_city'><a className='link_to_city' href='https://ro.wikipedia.org/wiki/Linz' target='_blank' alt= "img" rel="noreferrer">LINZ</a></li> */}
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
              <p className='paragraf'>November to March:
                Snow and the Northern lights

                May to August:
                Spring-like weather & good for camping outside.</p>
            </div>


          </section>
          <h2 className='header2'>Here are some key details about the country:</h2>
          <div className='info'>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>1.Location and Geography:</span>  Iceland is the westernmost country in Europe and lies just below the Arctic Circle. It is known for its stunning landscapes, including glaciers, hot springs, geysers, volcanoes, and rugged coastline.</p>
            <img className='landscapes' src='https://media.istockphoto.com/id/462425763/photo/reykjavik-marked-with-red-pushpin-on-iceland-map.jpg?s=612x612&w=0&k=20&c=hHo5Cqqsl1D8hhkUhDWF4kF6VHZxoeHWvzgJ9zViOpY=' alt="img"></img>
            <img className='landscapes' src='https://media.istockphoto.com/id/1049922746/photo/colorful-aurora-borealis.jpg?s=612x612&w=0&k=20&c=Acc03uh0okRK0RcAJ_DC5D0FkXZxHstX12kNg4uiAqk=' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>2.Language:</span>  Icelandic is the official language of Iceland. It is a North Germanic language, closely related to Old Norse.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>3.Population:</span> As of my last update in September 2021, Iceland had a population of around 360,000 people. The country has a relatively small and homogenous population.</p>
            <img className='landscapes' src='https://static.toiimg.com/thumb/msid-79558557,width-748,height-499,resizemode=4,imgsize-329088/.jpg' alt="img"></img>
            <img className='landscapes' src='https://i0.wp.com/www.travelweek.ca/wp-content/uploads/2022/08/Chasing-the-Midnight-Sun-in-Iceland-Skolavordustigur_Inside-2.jpg?fit=830%2C526&ssl=1' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>4.The capital and largest city of Iceland is Reykjavik. It is the country's political, cultural, and economic center.</span> </p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>5.History:</span>  Iceland was settled by Vikings in the late 9th century, primarily from Norway. It became an independent republic in 1944 after centuries of Danish rule.</p>
            <img className='landscapes' src='https://www.iceland-highlights.com/wp-content/uploads/2020/03/stokknes-east-iceland-by-andre-filipe-scaled.jpg' alt="img"></img>
            <img className='landscapes' src='https://www.rfi.ro/sites/default/files/articol/vulcan_1.png' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>6.Culture:</span>Iceland has a rich cultural heritage, including medieval literature like the sagas, which are epic tales of Viking history and mythology. Icelandic music and contemporary art have also gained international recognition.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>7.Tourism:</span> Tourism is a significant industry in Iceland, with visitors attracted to the country's unique natural wonders. Tourists often visit the Blue Lagoon, the Golden Circle route (which includes Þingvellir National Park, Geysir, and Gullfoss waterfall), and various other stunning landscapes.</p>
            <img className='landscapes' src='https://i.pinimg.com/736x/02/92/bd/0292bd0afa234d9ad71d7c579f07a8bb.jpg' alt="img"></img>
            <img className='landscapes' src='https://i.redd.it/6t3hi7wdvhy51.png' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>8.Economy:</span> Iceland has a mixed economy with a strong focus on renewable energy, fisheries, and tourism. It is known for its abundance of geothermal and hydroelectric power sources, making it a global leader in sustainable energy.</p>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>9.Climate:</span>  Despite its name, Iceland's climate is milder than one might expect, thanks to the warming effects of the North Atlantic Drift. However, it can still be quite variable and changeable, with temperatures ranging from sub-zero in winter to mild in summer.</p>
            <img className='landscapes' src='https://www.travelgossip.co.uk/wp-content/uploads/2023/04/Iceland.jpg' alt="img"></img>
            <img className='landscapes' src='https://travelweekly.co.uk/images/cmstw/original/7/d/3/0/7/easid-425438-media-id-30896.jpg' alt="img"></img>
            <p className='info_item'><span style={{ fontWeight: 'bold' }}>10.Nature and Outdoor Activities:</span> Iceland's nature is a paradise for outdoor enthusiasts, photographers, and anyone seeking an awe-inspiring experience with untouched landscapes. The country's commitment to preserving its natural wonders has also made it a prime example of responsible tourism and conservation efforts.</p>
          </div>
        </div>
      </div>
      <div className='footerCountry'><Footer /></div>
    </div>
  )
}