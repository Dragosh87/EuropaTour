import React from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div className="Content" style={{ flex: '1', display: 'flex' }}>
        <Leftbar />
        <CentralContext />
        <Rightbar />
      </div>
      <div className='review'>
      {/* <ReviewBar /> */}
      </div>
    </div>
  );
}

export default App;

