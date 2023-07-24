import React from 'react';
import './Home.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
import { Footer } from './Components/footer';
import Title from "./Components/Title";
import CommentBox from './Components/coments/CommentBox';
import { ReviewBar } from './Components/barReview';

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

          {/*<div className="w-full">*/}
          {/*    <CommentBox pageId="home-page"/>*/}
          {/*</div>*/}
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
