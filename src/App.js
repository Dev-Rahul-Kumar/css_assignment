// import logo from './logo.svg';
import './App.css';
import vector from './img/Vectorvector.png'
import star from './img/Vectoryector.png'
import ammenia from './img/image 5amennia.png'
import ellien from './img/image 4ellien.png'
import robert from './img/image 3robert.png'
import fruit from './img/Vectorfruitvector.png'
import veg from './img/Vectorveg.png'
import grains from './img/Vectorgrains.png'
import protein from './img/Vectorproteins.png'

function App() {
  return (
    <>
      <header>
        <nav className='App'>
          <h2> <img src={vector} alt="vector" /> Culinary kitchen</h2>
        </nav>
      </header>
      <div className="gallary">
        <h2 className='h2'>VARIETIES
          <div className='css'></div>
        </h2>
        <div className="twodiv">
          <div className="gal">
            <div className="content">
              <h3>Pizza is a savory dish of italian origin</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
              <hr />
              <br />
              <div className='rated'>
                <button className='button'>Explore </button>
                <p><img src={star} alt="star" /> Rated</p>
              </div>

            </div>

          </div>
          <div className="gal2">
            <div className="div1 div width">
              <div className="content">
                <h3>Crispy French Fries</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <hr />

                <div className='rated'>
                  <button className='button'>Explore </button>
                  <p><img src={star} alt="star" /> Rated</p>
                </div>

              </div>

            </div>
            <div className="div2 div width">
              <div className="content">
                <h3>Paneer Tikka</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <hr />

                <div className='rated'>
                  <button className='button'>Explore </button>
                  <p><img src={star} alt="star" /> Rated</p>
                </div>

              </div>

            </div>
            <div className="div3 div width">
              <div className="content">
                <h3>Macaroon</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <hr />

                <div className='rated'>
                  <button className='button'>Explore </button>
                  <p><img src={star} alt="star" /> Rated</p>
                </div>

              </div>

            </div>
            <div className="div4 div width">
              <div className="content">
                <h3>Doughnut</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <hr />

                <div className='rated'>
                  <button className='button'>Explore </button>
                  <p><img src={star} alt="star" /> Rated</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="article">
        <article className='summary'>
          <h3>Indian Cuisine</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </article>
        <article className='summary'>
          <h3>American Cuisine</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </article>
        <article className='summary'>
          <h3>Chinese Cuisine</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </article>
      </section>
      <br />
      <br />


      <div className="topchef">
        <div className="headline">
          <h3 className='h2'>TOP CHEFS
            <div className='css'></div>
          </h3>
        </div>


        <div className="chefs">
          <div className="user">
            <img src={ellien} alt="ellien" />
            <h4>Eileen Johnson</h4>
            <p>Executive Chef, USA</p>
          </div>

          <div className="user jr">
            <img src={robert} alt="robert" />
            <h4>Robert Downey Jr</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="user">
            <img src={ammenia} alt="ammenia" />
            <h4>Amanda Dority</h4>
            <p>Sous Chef, India</p>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="headline">
          <h3 className='h2'>FOOD GUIDE
            <div className='css'></div>
          </h3>
        </div>
        <div className="foods">
          <div className="foodone">
            <div className="veg width">
            <img src={veg} alt="" />
              <h4>VEGETABLES</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <div className="fruits width">
              <img src={fruit} alt="" />
              <h4>FRUITS</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </div>
          </div>
          <div className="foodtwo">
            <div className="grains width">
            <img src={grains} alt="" />
              <h4>WHOLE GRAINS</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="proteins width">
              <h4>HEALTHY PROTEIN</h4>
              <img src={protein} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}

export default App;
