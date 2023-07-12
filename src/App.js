import React from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <HomePage />
>>>>>>> 1e6f941a07173c70dd2327e2ee67a2da7b972ca8
    </div>
  );
}

export default App;

