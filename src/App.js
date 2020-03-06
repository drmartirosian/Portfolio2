import React, {Component} from 'react';
import './App.css';
import panda from './img/panda.png'
import junky from './img/junky.png'
import dom from './img/dom.png'
import coverletter from './img/coverletter.png'
import resume from './img/resume.png'
import Card from './components/Card'



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
          <p>Description here...</p>
          <h3>Let's<br></br> <a href="#section-b" className="btn">START</a></h3>
        </div>
      </header>

      <div id="main">




        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">Software Engineer</h2>
            <div className="content-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus. Perferendis officiis deserunt velit voluptas nobis sequi
            animi totam, accusantium, ex eius quia, natus quo?</p>
            </div>
          </div>
        </section>






        <div id="section-b" className="grid">
          <ul>
            <li>
              <Card img={dom} title='DomDebugger'  description='A' btnLink='http://Linkedin.com/in/drmartirosian' />
            </li>
            <li>
              <Card img={junky} title='JunKart'  description='B' btnLink='http://Linkedin.com/in/drmartirosian' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' btnLink='http://Linkedin.com/in/drmartirosian' />
            </li>
          </ul>
        </div>





        <section id="section-c" className="grid">
          <div className="content-wrap">
            <h1 className="content-title">SECTION:</h1>
            <h3>adgdfasfsd sfsdf s sd fsd sd fs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus. Perferendis officiis deserunt velit voluptas nobis sequ</p>
          </div>
        </section>








        <section id="section-d" className="grid">
          <div className="box">
            <h2 className="content-title">RESUME:</h2>
            <a className="content-title" href="https://drive.google.com/file/d/1IqASiUplJi55HIDvGwV6lvE9Dn3lPuHE/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="reslet" src={resume} /></a>
          </div>
          <div className="box">
            <h2 className="content-title">COVERLETTER:</h2>
            <a className="content-title" href="https://docs.google.com/document/d/1WmiGBM5XUGNdj10uyTcjjBy7fPn1PrCM0QQs7OlrJEw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="reslet" src={coverletter} /></a>
          </div>
        </section>





      </div>




      <footer id="main-footer" className="grid">
        <div>Acme Web Solutions</div>
        <div>Project By <a href="http://Linkedin.com/in/drmartirosian" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      </footer>
    </div>
    );
  }
}

export default App;