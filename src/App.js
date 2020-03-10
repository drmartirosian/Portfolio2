import React, {Component} from 'react';
import './App.css';
import panda from './img/panda.png'
import junky from './img/junky.png'
import dom from './img/dom.png'
import coverletter from './img/coverletter.png'
import resume from './img/resume.png'
import propic from './img/propic.jpeg'
import Card from './components/Card'
import { FaLinkedin, FaGithubAlt,FaTwitterSquare, FaGoogle,FaPhone } from 'react-icons/fa';


class App extends Component {

  constructor() {
    super();
    this.state = {
      img: {panda, junky, dom},
    };
  }




  render() {
    return (
      <div className="App">

      <header id="showcase" className="grid">
        <div className="bg-image"></div>
          <div className="content-wrap">
          <h1>Daniel <strong>Martirosian</strong></h1>
          <p>Software Engineer</p>
          <h3><br></br> <a href="#section-a" className="btn">START</a></h3>
        </div>
      </header>

      <div id="main">




        <section id="section-a" className="grid">
          <div className="content-wrap">
            <img style={{width:'50%', height:'50%'}} src={propic} />
            <h2 className="content-title">Mission Statement:</h2>
            <p>Software developer geared towards getting the product to market. I see shortcomings or weaknesses as opportunities for growth. I am at peak performance when collaborating with and learning from a team of talented developers. Building code to thrive in tomorrow's market requires building teams that can do the same. 620+ hours of full-stack software program engineering. Knowledge spans Javascript, HTML, React, Python, JavaScript, Django, Express, MongoDB, PostgreSQL server, and more. Let's get coding! </p>
          </div>
        </section>






        <div id="section-b" className="grid">
          <ul>
            <li>
              <Card img={dom} title='DomDebugger'  description='Simple educational DOM-manipulation game. Enter code in the side panel to fix the "website" and progress the levels.' btnLink='https://codepen.io/drmartirosian/pen/bGGMmbG?editors=1010' />
            </li>
            <li>
              <Card img={junky} title='JunKart'  description='Simple market e-commerce app. Uses React, JavaScript, Paypal API. Deployed with Netlify.com. Visit Github for code:' btnLink='http://junkycart.netlify.com/' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='A coder / programmer paradise! Blog, chat, and post about the latest/greatest projects you have in the pipeline.' btnLink='https://redpanda2.herokuapp.com/' />
            </li>
          </ul>
        </div>





        <section id="section-c" className="grid">
          <div className="content-wrap">
            <h1 className="content-title">LANGUAGES:</h1>
            <p>JavaScript, Python</p>
            <h1 className="content-title">FRAMEWORKS:</h1>
            <p>React, Express, Django</p>
            <h1 className="content-title">DATABASES:</h1>
            <p>MongoDB, PostgreSQL</p>
            <h1 className="content-title">AND MORE!</h1>
            <p>AWS/Cloudinary, Hooks/classes, Github/Git, and more!</p>
          </div>
        </section>








        <section id="section-d" className="grid">
          <div className="box">
            <h2 className="content-title">RESUME:</h2>
            <a className="content-title" href="/" target="_blank" rel="noopener noreferrer"><img className="reslet" src={resume} /></a>
          </div>
          <div className="box">
            <h2 className="content-title">COVERLETTER:</h2>
            <a className="content-title" href="/" target="_blank" rel="noopener noreferrer"><img className="reslet" src={coverletter} /></a>
          </div>
        </section>





      </div>




      <footer id="main-footer" className="grid">
        <a href="https://twitter.com/drmartirosian" target="_blank" rel="noopener noreferrer"><FaTwitterSquare />Twitter</a>
        <a href="http://github.com/drmartirosian" target="_blank" rel="noopener noreferrer"><FaGithubAlt />Github</a>
        <a href="http://Linkedin.com/in/drmartirosian" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
        <br></br>
        <h4> <FaGoogle /> martirosianmd@gmail.com</h4>
        <h4> <FaPhone /> 619.905.1075</h4>
      </footer>
    </div>
    );
  }
}

export default App;