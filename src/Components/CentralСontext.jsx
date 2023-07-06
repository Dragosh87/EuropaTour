import React from 'react';
import './Context.css';

function CentralContext() {
  return (
    <div  style={{ flex: '0 0 60%', backgroundColor: '#f6ebe5' }}>
      <section className="CentralContext">
      <img className='image' src='https://www.tosomeplacenew.com/wp-content/uploads/2021/12/Getting-ready-for-Europe-1024x819.jpg'/>
      <ul className='paragraf'>
        <li>Toată lumea visează să călătorească în Europa și există un motiv pentru asta.
           Fie că faci prima ta excursie solo, faci rucsacul cu un buget redus, cauti o evadare elegantă sau vrei să 
           explorezi noi orașe și culturi, Europa are ceva pentru toată lumea.
        </li>
        <li>
        Sezonul turistic de vârf al Europei este vara! Din iunie până în august, călătorii din întreaga
         lume se îngrămădesc în regiune pentru a se bucura de obiectivele turistice cu vreme frumoasă.
        </li>
      </ul>
      </section>
      <ul className='paragraf2'>
        <li>
        Cu toate acestea, dacă mergi cu rucsacul prin Europa, cel mai bun moment pentru a călători în regiune 
          este în extrasezon, din octombrie până în aprilie. Veti avea mai mult noroc să găsiti zboruri ieftine 
          și hotelurile își reduc preturile.
        </li>
        <li>
        Dar, în functie de destinatie, iarna poate fi o perioadă aglomerată a anului pentru cei care plănuiesc 
          o vacantă la schi sau care doresc să experimenteze pietele europene de Crăciun.
        </li>
      </ul>
      <img className='image2' src='https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg'/>
      <footer className='footer'>
        <img className='imgFooter' src='https://theblondeabroad.com/wp-content/uploads/2018/07/Footer-Manifesto.png'/>
      </footer>
    </div>
  );
}

export default CentralContext;