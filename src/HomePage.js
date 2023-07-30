import React, { useEffect } from 'react';
import './Home.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
// import { ReviewBar } from './Components/barReview';
import { Footer } from './Components/footer';
import Title from "./Components/Title";
import CommentBox from "./Components/coments/CommentBox";

function HomePage() {
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

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

        {/* <div className='review'>
          <ReviewBar />
        </div> */}

        <div>
          <CommentBox pageId="central-context" />

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
