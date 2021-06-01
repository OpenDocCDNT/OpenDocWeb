import './HintBar.css';
import React from "react";
import hintBarNeutralSvg from "../../img/svg/ui/hintBar/hintBarNeutral.svg"
import hintBarImportantSvg from "../../img/svg/ui/hintBar/hintBarImportant.svg"
import hintBarErrorSvg from "../../img/svg/ui/hintBar/hintBarError.svg"
import hintBarSuccessSvg from "../../img/svg/ui/hintBar/hintBarSuccess.svg"
function HintBar(props) {
  return <HintBarComp hintType={props.hintType} hintText={props.hintText}/>
}

class HintBarComp extends React.Component {
  constructor(props) {
    super(props);
    this.widthDefiner = this.widthDefiner.bind(this);
    this.backgroundSetter = this.backgroundSetter.bind(this);
    this.state = {
      hintText: this.props.hintText,
      hintType: this.props.hintType,
    }
    this.hintBarRoot = React.createRef();
    this.hintBarText = React.createRef();
    this.hintBarBackgroundClass = {
      neutral: "hintBar-background-neutral",
      important: "hintBar-background-important",
      error: "hintBar-background-error",
      success: "hintBar-background-success",
    }
  }

  backgroundSetter(hintType) {
    const hintBarRoot = this.hintBarRoot.current;
    switch (hintType) {
      case "error":
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.important)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.neutral)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.success)
        hintBarRoot.classList.add(this.hintBarBackgroundClass.error)
        break;
      case "important":
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.error)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.neutral)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.success)
        hintBarRoot.classList.add(this.hintBarBackgroundClass.important)
        break;
      case "neutral":
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.error)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.important)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.success)
        hintBarRoot.classList.add(this.hintBarBackgroundClass.neutral)
        break;
      case "success":
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.error)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.important)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.neutral)
        hintBarRoot.classList.add(this.hintBarBackgroundClass.success)
        break;
      default:
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.error)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.important)
        hintBarRoot.classList.remove(this.hintBarBackgroundClass.success)
        hintBarRoot.classList.add(this.hintBarBackgroundClass.neutral)
        break;
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      hintType: nextProps.hintType,
      hintText: nextProps.hintText,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.widthDefiner();
    this.backgroundSetter(this.props.hintType);
  }

  widthDefiner() {
    const text = this.hintBarText.current;
    const hintBarErrorRoot = this.hintBarRoot.current;
    const width = text.getBoundingClientRect().width + 55;
    hintBarErrorRoot.style.width = width + "px";
  }

  componentDidMount() {
    this.widthDefiner();
    this.backgroundSetter(this.props.hintType);

  }

  render() {
    let hintBarSvg = hintBarNeutralSvg;
    switch (this.state.hintType) {
      case "error":
        hintBarSvg = hintBarErrorSvg
        break;
      case "important":
        hintBarSvg = hintBarImportantSvg
        break;
      case "neutral":
        hintBarSvg = hintBarNeutralSvg
        break;
      case "success":
        hintBarSvg = hintBarSuccessSvg
        break;
      default:
        hintBarSvg = hintBarNeutralSvg
        break;
    }
    return (
      <div id="hintBar-root" ref={this.hintBarRoot} className="hintBar-root">
        <img className="hintBar-img" src={hintBarSvg} alt="X"/>
        <span ref={this.hintBarText} id="hintBar-text" className="hintBar-text">{this.props.hintText}</span>
      </div>
    )
  }
}

export default HintBar;
