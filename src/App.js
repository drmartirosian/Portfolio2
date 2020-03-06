import React, {Component} from 'react';
import './App.css';
import panda from './img/panda.png'
import junky from './img/junky.png'
import dom from './img/dom.png'
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


      
      {/* <!-- Header Showcase --> */}
      <header id="showcase" className="grid">
        <div className="bg-image"></div>
          <div className="content-wrap">
          <h1>Welcome to Acme Web Solutions</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
          <h3>Let's<br></br> <a href="#section-b" className="btn">START</a></h3>
        </div>
      </header>




      {/* <!-- Main Area --> */}
      <div id="main">





        {/* <!-- Section A --> */}
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">Software Engineer</h2>
            <div className="content-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus. Perferendis officiis deserunt velit voluptas nobis sequi
            animi totam, accusantium, ex eius quia, natus quo?</p>
            </div>
          </div>
        </section>



        {/* <!-- Section B --> */}
        <div id="section-b" className="grid">


          <ul>
            <li>
              <Card img={dom} title='DomDebugger'  description='A' />
            </li>
            <li>
              <Card img={junky} title='JunKart'  description='B' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' />
            </li>
            <li>
              <Card img={panda} title='RedPanda'  description='C' />
            </li>
          </ul>


        </div>





          {/* <!-- Section C --> */}
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">We handle all of your digital needs</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam rerum vel earum error fugiat cupiditate, dolore eius! Minus, explicabo.</p>
            </div>
          </section>









          {/* <!-- Section D --> */}
          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">Contact Me</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde fuga.</p>
              <p>contact@acmewebsolutions.test</p>
            </div>
            <div className="box">
              <h2 className="content-title">About Me</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum porro deserunt, deleniti, quae facere repudiandae, officiis est exercitationem nobis iusto doloremque! Soluta excepturi in aut suscipit amet temporibus quo?</p>
            </div>
          </section>
        </div>







          {/* <!-- Footer --> */}
          <footer id="main-footer" className="grid">
            <div>Acme Web Solutions</div>
            <div>Project By <a href="http://Linkedin.com/in/drmartirosian" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          </footer>



    </div>
    );
  }
}

export default App;