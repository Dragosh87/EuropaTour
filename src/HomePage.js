import React from 'react';
import './Home.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
import { ReviewBar } from './Components/barReview';
import LoginForm from './LoginForm';
import ModificariForm from './ModificariForm';
import { Footer } from './Components/footer';



function HomePage() {
  return (
    <>

    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
     
      <div className="Content" style={{ flex: '1', display: 'flex' }}>
        <Leftbar />
        <CentralContext />
        <Rightbar />
      </div>
{/* 
      <div>
        <h1>Autentificare</h1>
        <LoginForm />

        <h1>Modificări în backend</h1>
        <ModificariForm />
      </div> */}
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