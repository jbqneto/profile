import './assets/style/sass/style.scss';

import image from './assets/img/jbqneto.jpg';

function App() {
  return (
    <div id="home" className="App">
      <header className="menu">
        <div className="menu-left">
          <a href="#home" className="link">Home</a>
          <a href="#about" className="link">About</a>
        </div>
        <div className="menu-logo">
          <h5>José Neto</h5>
        </div>
        <div className="menu-right">
          <a href="#works" className="link">Works</a>
          <a href="#contact" className="link">Contact</a>
        </div>
      </header>

      <div className="bg">

      </div>

      <section className="container hero">
        <div className="container-item">
          <h1>José Bezerra Neto</h1>
          <h3 className="mask text-right">Back-end Developer</h3>
          <h3 className="mask">Front-end Student</h3>

          <a href="#experience" className="square">
            EXPERIENCE
          </a>
        </div>
        <div className="container-item">
          <img src={image} alt="Jose Bezerra Neto" />
        </div>
      </section>

    </div>
  );
}

export default App;
