import React, { Component } from 'react';
import Container from "./components/Container";
import Square from "./components/Square";
import Blackpink from "./blackpink.json";
import "./App.css";

const shuffle = require("shuffle-array");


class App extends Component {

  state = {
    Blackpink,
    score: 0,
    bestScore: 0,
    message: "",
    shook: ""
  };

  dduDuDduDu = id => {

    let member = this.state.Blackpink.filter(member => member.id === id)[0];

    let score = this.state.score;
    let bestScore = this.state.bestScore;
    let message = this.state.message;
    let shook = this.state.shook;

    if(member.clicked === false){
      member.clicked = true;
      console.log(member)


      score++;
      if(bestScore < score){
        bestScore = score;
      }
      message = "";
      shook = "";
      console.log(score)
      shuffle(Blackpink)
      this.setState({score, bestScore, Blackpink, message, shook});
    } else {
    this.seeULater();
    }

  };

  seeULater = () => {
    let message = this.state.message;
    let shook = this.state.shook;
    let bestScore = this.state.bestScore;
    let score = this.state.score;

    if (bestScore < score){
      bestScore = score;
      if (bestScore = 12){
        console.log("bitch u won!")
      }
    } 
    else {
    message = "Hitchu witdat DDU DU DDU DU";
    shook = "animated jello"
    }
    score = 0;
    this.state.Blackpink.map((member) => {
      return member.clicked = false;
    });
    this.setState({score, bestScore, message, shook})
  }

  render() {
    return (

      <Container>
      <div className = {this.state.shook}>
          <div className="row justify-content-center">
              <div className ="col-12 col-md-10">
                  <h1 className = "text-center font-weight-bold pink">BLΛƆKPIИK | SQUARE UP</h1>
                  <h2 className = "text-center font-weight-bold">
                  CURRENT SCORE: {this.state.score} | BEST SCORE: {this.state.bestScore}
                  </h2>
                  <h3 className = "text-center font-weight-bold pink big">{this.state.message}</h3>
              </div>
          </div>

          <div className="row justify-content-center no-gutters pink-box px-1 py-1">

              {this.state.Blackpink.map( (member, i) => (
              <Square
                hitEmWitDat = {this.dduDuDduDu}
                id = {member.id}
                image = {member.image}
                clicked = {member.clicked}
                key = {i}
              />
              ))}

          </div>
      </div>

      </Container>
    );
  }
}

export default App;
