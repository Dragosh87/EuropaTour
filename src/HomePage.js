import React from 'react';
import './Home.css';
import Navbar from './Components/Navbar';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import CentralContext from './Components/CentralСontext';
import { ReviewBar } from './Components/barReview';
import LoginForm from './LoginForm';
import ModificariForm from './ModificariForm';



function HomePage() {
  return (
    <>

    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div className="flex justify-center text-center title_of_page">
        <img className="w-24 h-24" src="https://media.istockphoto.com/id/1199315910/vector/europe-union-vector-star-icon-european-union-flag-symbol-euro-icon-vector.jpg?s=612x612&w=0&k=20&c=z7wwiYq3XAwHedcqGJfcWZWk3mXJpKeacRjtCNhw13Q=" alt="logoEuropa" width="200" height="200"></img>
        <h1 className='header'>Europe Travel Guide</h1>
        <hr />
      </div>
      <div className="Content" style={{ flex: '1', display: 'flex' }}>
        <Leftbar />
        <CentralContext />
        <Rightbar />
      </div>

      <div>
        <h1>Autentificare</h1>
        <LoginForm />

        <h1>Modificări în backend</h1>
        <ModificariForm />
      </div>
      <div className='review'>
        <ReviewBar />
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