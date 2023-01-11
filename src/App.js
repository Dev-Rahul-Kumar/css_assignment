// import logo from './logo.svg';
import './App.css';
import vector from './img/Vectorvector.png'

function App() {
  return (
    <>
    <header>
      <nav className='App'>
        <h2> <img src={vector} alt="vector" /> Culinary kitchen</h2>
      </nav>
    </header>
    <div className="gallary">
      <h2>VARIETIES</h2>
      <div className="gal">

      </div>
      <div className="gal2">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
      </div>
    </div>
    </>
  );
}

export default App;
