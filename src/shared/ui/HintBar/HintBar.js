import './HintBar.css';
import React from "react";
import hintBarNeutralSvg from "../../img/svg/ui/hintBar/hintBarNeutral.svg"
import hintBarImportantSvg from "../../img/svg/ui/hintBar/hintBarImportant.svg"
import hintBarErrorSvg from "../../img/svg/ui/hintBar/hintBarError.svg"
import hintBarSuccessSvg from "../../img/svg/ui/hintBar/hintBarSuccess.svg"
function HintBar(props) {
  let hintType = props.hintType;
  switch (hintType) {
    case "neutral":
      return <HintBarNeutral text={props.text}/>
    case "important":
      return <HintBarImportant text={props.text}/>
    case "error":
      return <HintBarError text={props.text}/>
    case "success":
      return <HintBarSuccess text={props.text}/>
    default:
      return <HintBarNeutral text={props.text}/>
  }
}

class HintBarNeutral extends React.Component {
  constructor(props) {
    super(props);
    this.widthDefiner = this.widthDefiner.bind(this);
  }

  widthDefiner() {
    const text = document.getElementById("hintBarNeutral-text");
    const hintBarErrorRoot = document.getElementById("hintBarNeutral-root");
    const width = text.getBoundingClientRect().width + 73;
    hintBarErrorRoot.style.width = width + "px";
  }

  componentDidMount() {
    this.widthDefiner();
  }

  render() {
    return (
      <div id="hintBarNeutral-root" className="hintBarNeutral-root">
        <img className="hintBarNeutral-img" src={hintBarNeutralSvg} alt="X"/>
        <span id="hintBarNeutral-text" className="hintBarNeutral-text">{this.props.text}</span>
      </div>
    )
  }
}

class HintBarImportant extends React.Component {
  constructor(props) {
    super(props);
    this.widthDefiner = this.widthDefiner.bind(this);
  }

  widthDefiner() {
    const text = document.getElementById("hintBarImportant-text");
    const hintBarErrorRoot = document.getElementById("hintBarImportant-root");
    const width = text.getBoundingClientRect().width + 73;
    hintBarErrorRoot.style.width = width + "px";
  }

  componentDidMount() {
    this.widthDefiner();
  }

  render() {
    return (
      <div id="hintBarImportant-root" className="hintBarImportant-root">
        <img className="hintBarImportant-img" src={hintBarImportantSvg} alt="X"/>
        <span id="hintBarImportant-text" className="hintBarImportant-text">{this.props.text}</span>
      </div>
    )
  }
}

class HintBarError extends React.Component {
  constructor(props) {
    super(props);
    this.widthDefiner = this.widthDefiner.bind(this);
  }

  widthDefiner() {
    const text = document.getElementById("hintBarError-text");
    const hintBarErrorRoot = document.getElementById("hintBarError-root");
    const width = text.getBoundingClientRect().width + 73;
    hintBarErrorRoot.style.width = width + "px";
  }

  componentDidMount() {
    this.widthDefiner();
  }

  render() {
    return (
      <div id="hintBarError-root" className="hintBarError-root">
        <img className="hintBarError-img" src={hintBarErrorSvg} alt="X"/>
        <span id="hintBarError-text" className="hintBarError-text">{this.props.text}</span>
      </div>
    )
  }
}


class HintBarSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.widthDefiner = this.widthDefiner.bind(this);
  }

  widthDefiner() {
    const text = document.getElementById("hintBarSuccess-text");
    const hintBarErrorRoot = document.getElementById("hintBarSuccess-root");
    const width = text.getBoundingClientRect().width + 73;
    hintBarErrorRoot.style.width = width + "px";
  }

  componentDidMount() {
    this.widthDefiner();
  }

  render() {
    return (
      <div id="hintBarSuccess-root" className="hintBarSuccess-root">
        <img className="hintBarSuccess-img" src={hintBarSuccessSvg} alt="X"/>
        <span id="hintBarSuccess-text" className="hintBarSuccess-text">{this.props.text}</span>
      </div>
    )
  }
}

export default HintBar;
