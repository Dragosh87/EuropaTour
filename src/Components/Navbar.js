
import './Navbar.css';

function Navbar() {

  const handleOnClick = () => {
    alert("Send us an email at the adress: eurotravelguide2023@gmail.com or call us: 07XX-XXX-XXX");
  }

  return (
    <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'white' }}>
    <nav className="nav_bar">
  <ul>
    <li className="item">
      DESTINATIONS
      <ul className="dropdown">
        <li className="dropdown_item">Albania</li>
        <li className="dropdown_item">Andorra</li>
        <li className="dropdown_item">Austria</li>
        <li className="dropdown_item">Belarus</li>
        <li className="dropdown_item">Belgium</li>
        <li className="dropdown_item">Bosnia and Herzegovina</li>
        <li className="dropdown_item">Croatia</li>
        <li className="dropdown_item">Cyprus</li>
        <li className="dropdown_item">Czechia</li>
        <li className="dropdown_item">Denmark</li>
        <li className="dropdown_item">Estonia</li>
        <li className="dropdown_item">Faroe Islands</li>
        <li className="dropdown_item">France</li>
        <li className="dropdown_item">Germany</li>
        <li className="dropdown_item">Gibraltar</li>
        <li className="dropdown_item">Greece</li>
        <li className="dropdown_item">Guernsay</li>
        <li className="dropdown_item">Hungary</li>
        <li className="dropdown_item">Iceland</li>
        <li className="dropdown_item">Irland</li>
        <li className="dropdown_item">Italy</li>
        <li className="dropdown_item">Isle of Man</li>
        <li className="dropdown_item">Jersey</li>
      </ul>
    </li>
    <li className="item"><a href="#">ABOUT US</a></li>
    <li className="item"><a href="#" onClick={handleOnClick}>CONTACT</a></li>
  </ul>
</nav>

      <h1 className='header'>Europe Travel Guide</h1>
      <hr />

    </div>
  );
}



export default Navbar;