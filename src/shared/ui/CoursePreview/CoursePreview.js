import './CoursePreview.css';
import React from "react";
import DifficultyDisplay from "./DifficultyDisplay/DifficultyDisplay";

function CoursePreview(props) {
  return <CoursePreviewComp courseImg={props.courseImg} courseTitle={props.courseTitle} courseText={props.courseText} courseDifficulty={props.courseDifficulty}/>
}

class CoursePreviewComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      courseImg: this.props.courseImg,
      courseTitle: this.props.courseTitle,
      courseText: this.props.courseText,
      courseDifficulty: this.props.courseDifficulty
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      courseText: nextProps.courseText,
      courseTitle: nextProps.courseTitle,
      courseDifficulty: nextProps.courseDifficulty,
      courseImg: nextProps.courseImg
    }
  }

  render() {
    let displayImg = false;
    if (this.state.courseImg !== "null") {
      displayImg = true
    }
    return (
      <div className="coursePreview-root">
        {
           displayImg ? <img src={this.state.courseImg} className="coursePreview-imgObject" alt="Course"/> : <div className="coursePreview-imgDiv"/>
        }

        <div className="coursePreview-textContainer">
          <div className="coursePreview-textContainer-title">
            <span >{this.state.courseTitle}</span>
          </div>
          <div className="coursePreview-textContainer-text">
            <span >{this.state.courseText}</span>
          </div>
        </div>
        <div className="coursePreview-difficulty">
          <DifficultyDisplay difficulty={this.state.courseDifficulty}/>
        </div>
      </div>
    )
  }
}

export default CoursePreview;
