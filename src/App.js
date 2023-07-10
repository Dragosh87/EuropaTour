import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
import { ReviewBar } from './Components/barReview';

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
      <ReviewBar />
      </div>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       {/* Navbar */}
//       <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'lightblue' }}>
//         <Navbar />
//       </div>

//       {/* Content */}
//       <div className="Content" style={{ flex: '1', display: 'flex' }}>
//         {/* Leftbar */}
//         <div className="Leftbar" style={{ flex: '0 0 20%', backgroundColor: 'lightgreen' }}>
//           <Leftbar />
//         </div>

//         {/* CentralContent */}
//         <div className="CentralContent" style={{ flex: '0 0 60%', backgroundColor: 'lightpink' }}>
//           <CentralContext />
//         </div>

//         {/* RightBar */}
//         <div className="Rightbar" style={{ flex: '0 0 20%', backgroundColor: 'lightyellow' }}>
//           <Rightbar />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;