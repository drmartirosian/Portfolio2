import React, { Component } from 'react'
import styled from 'styled-components'

let img;
export default class Card extends Component {
    render() {
        return (
            <MainContainer>
              <div className="card">
                  <img src={this.props.img} alt="" />
                  <div className="card-content">
                  <h3 className="card-title">{this.props.title}</h3>
                  <p>{this.props.description}</p>
                  <a href={this.props.btnLink} className="btn" target="_blank" rel="noopener noreferrer"><strong>TRY IT!</strong></a>
                  </div>
              </div>
            </MainContainer>
        )
    }
}


//MAIN CONTAINER
const MainContainer = styled.div`
img {
  display: block;
  width: 100%;
  height: auto;
}
h1, h2, h3 {
  margin: 0;
  padding: 1em 0;
}
p {
  margin: 0;
  padding: 1em 0;
}
.btn {
  display: inline-block;
  background: #333;
  color: #fff;
  text-decoration: none;
  padding: 1em 2em;
  border: 1px solid #666;
  margin: 0.5em 0;
}
.btn:hover {
  background: #eaeaea;
  color: #333;
}



#section-b {
  padding: 2em 1em 1em;
}
#section-b ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#section-b li {
  margin-bottom: 1em;
  background: #fff;
  color: #333;
}

.card-content {
  padding: 1.5em;
}


#section-c {
  background: #fff;
  color: #333;
  padding: 2em;
}


#section-d .box {
  padding: 2em;
  color: #fff;
}
#section-d .box:first-child {
  background: #2690d4;
}

/* Footer */

#main-footer {
  padding: 2em;
  background: #000;
  color: #fff;
  text-align: center;
}
#main-footer a {
  color: #2690d4;
  text-decoration: none;
}

/* Media Queries */
@media (min-width: 720px) {


  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
  }
  #section-a .content-text {
    columns: 2;
    column-gap: 2em;
  }
  #section-a .content-text p {
    padding-top: 0;
  }

  .content-wrap,
  #section-b ul {
    grid-column: 2/4;
  }
  #section-b ul {
    display: flex;
    justify-content: space-around;
  }
  #section-b li {
    width: 31%;
  }

  .box,
  #main-footer div {
    grid-column: span 2;
  }





}





`;