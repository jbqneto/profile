import './assets/style/sass/style.scss';

import image from './assets/img/jbqneto.jpg';

import Background from './components/Background';

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
          <a href="#experience" className="link">Experience</a>
          <a href="#contact" className="link">Contact</a>
        </div>
      </header>

      <div className="relative">
        <Background />
      </div>

      <section id="home" className="container hero">
        <div className="container-item">
          <h1>José Bezerra Neto</h1>
          <h2 className="mask text-right">Back-end Developer</h2>
          <h2 className="mask">Front-end Student</h2>

          <div className="square-container">
            <a href="#works" className="square">
              Works
            </a>
          </div>

        </div>
        <div className="container-item">
          <img src={image} alt="Jose Bezerra Neto" />
        </div>
      </section>

      <section id="experience" className="list">
        <div className="list-item">
          <h2>Selected Works</h2>
        </div>

        <div className="bb-gray"></div>

        <div className="list-item">
          <h5>01.</h5>
          <a target="_blank" href="https://portalgazeta83.com/" rel="noreferrer">
            <h3>Portal Gazeta83</h3>
          </a>
          <img src="img/works/work_1.jpg" className="img-project" alt="Portal gazeta83" />
        </div>

        <div className="bb-gray"></div>

        <div className="list-item">
          <h5>02.</h5>
          <a target="_blank" href="https://github.com/jbqneto/plantmanager" rel="noreferrer">
          <h3>NWL - Plant Manager</h3>
          </a>
          <img src="img/works/work_2.jpg" className="img-project" alt="Github - plantmanager" />
        </div>

        <div className="bb-gray"></div>

        <div className="list-item">
          <h5>03.</h5>
          <a target="_blank" href="https://github.com/jbqneto/nlw-web" rel="noreferrer">
          <h3>NLW - E-Coleta</h3>
          </a>
          <img src="img/works/work_3.jpg" className="img-project" alt="Github - E-Coleta" />
        </div>
      </section>

      <section id="experience" className="list">
        <div className="list-item">
          <h2>Work Experience</h2>
        </div>

        <div className="bb-gray"></div>

        <div className="list-job">
          <div className="company">
            <h3>Accenture</h3>
            <h5>08/2020 - Present</h5>
          </div>
          <div className="about">
            <h4>Software Developer / Consultant</h4>
            <p>
            Developing microservices using Spring Boot, RabbitMQ, SQL (SQL Server and Mysql) and any more tools that helps to improve the solutions we deliver to the client
            </p>
          </div>
        </div>

        <div className="bb-gray"></div>

        <div className="list-job">
          <div className="company">
            <h3>Redesoft</h3>
            <h5>09/2017 - 08/2020</h5>
          </div>
          <div className="about">
            <h4>Full Stack developer / team leader</h4>
            <p>
            Responsible for web implementations of the existing desktop ERP, java webservice maintenance and the REST and SOAP comunication.
Responsible for the front-end team, developing the web interface of our ERP in HTML and Vuejs Javascript framework.
            </p>
          </div>
        </div>

        <div className="bb-gray"></div>


        <div className="list-job">
          <div className="company">
            <h3>Redesoft</h3>
            <h5>06/2014 - 08/2017</h5>
          </div>
          <div className="about">
            <h4>Software Developer</h4>
            <p>
            Maintain and develop new funcionalities of our company ERP, using JAVA on the back-end and firebird database.
Create and mantain new web funcionalities, along with our own front-end framework and its comunication with our back-end using REST rest architecture.
            </p>
          </div>
        </div>

        <div className="list-job">
          <div className="company">
            <h3>Redesoft</h3>
            <h5>02/2014 - 05/2014</h5>
          </div>
          <div className="about">
            <h4>Front-end Developer</h4>
            <p>
            Front-end development of some parts of an already existing ERP (in delphi), using HTML5, javascript, Jquery and BackbongJs.
            </p>
          </div>
        </div>

        <div className="list-job">
          <div className="company">
            <h3>EW3</h3>
            <h5>11/2011 - 06/2013</h5>
          </div>
          <div className="about">
            <h4>Project Manager</h4>
            <p>
              Project manager and web developer. Responsible for the systems analysis along with the clients and projects documentation.
              Team leader, responsible for the tasks assignment and projects management.Back-end development with PHP OO, and using CakePHP framework.
            </p>
          </div>
        </div>

        <div className="list-job">
          <div className="company">
            <h3>IGEMTE (UFPB)</h3>
            <h5>04/2011 - 11/2011</h5>
          </div>
          <div className="about">
            <h4>Flash Developer</h4>
            <p>
            Educational game development using Adobe Flash, with ActionScript 3.0.  
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
