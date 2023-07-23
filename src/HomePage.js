import React from 'react';
import './Home.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
import { ReviewBar } from './Components/barReview';
import { Footer } from './Components/footer';
import Title from "./Components/Title";



function HomePage() {
  return (
    <>

      <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar />
        <Title />
        <div className="Content" style={{ flex: '1', display: 'flex' }}>
          <Leftbar />
          <CentralContext />
          <Rightbar />
        </div>

        <div className='review'>
          <ReviewBar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
