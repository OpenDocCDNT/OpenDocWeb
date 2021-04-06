import './DifficultyDisplay.css';
import React from "react";

function DifficultyDisplay(props) {
  return <DifficultyDisplayComp difficulty={props.difficulty}/>
}

class DifficultyDisplayComp extends React.Component {
  constructor(props) {
    super(props);
    this.setStyles = this.setStyles.bind(this)
    this.state = {
      difficulty: this.props.difficulty
    }
    this.bubbles = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]
  }

  setStyles() {
    for (let i=0;i<this.state.difficulty;i++) {
      this.bubbles[i].current.classList.add("difficultyDisplay-bgGreen")
    }
  }

  componentDidMount() {
    this.setStyles();
  }

  render() {

    return (
      <div className="difficultyDisplay-root">
        <div className="difficultyDisplay-label">Difficulté</div>
        <div className="difficultyDisplay-bubbles">
          <div ref={this.bubbles[0]} className="difficultyDisplay-bubble"/>
          <div ref={this.bubbles[1]} className="difficultyDisplay-bubble"/>
          <div ref={this.bubbles[2]} className="difficultyDisplay-bubble"/>
          <div ref={this.bubbles[3]} className="difficultyDisplay-bubble"/>
          <div ref={this.bubbles[4]} className="difficultyDisplay-bubble"/>
        </div>
      </div>
    )
  }
}

export default DifficultyDisplay;
