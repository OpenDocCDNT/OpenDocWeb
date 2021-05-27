import './CourseCreateQuestions.css';
import React from "react";
import HintBar from "../../../../../ui/HintBar/HintBar";
import DynamicInput from "../../../../../ui/Input/DynamicInput/DynamicInput";
import DifficultyInput from "../../../../../ui/DifficultyInput/DifficultyInput";
import ImageUpload from "../../../../../ui/ImageUpload/ImageUpload";


function DashboardCreateCourseQuestions(props) {
  return <DashboardCreateCourseQuestionsComp data={props.data}/>
}

class DashboardCreateCourseQuestionsComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
    this.handleInputChangeDesc = this.handleInputChangeDesc.bind(this);
    this.handleInputChangeDiff = this.handleInputChangeDiff.bind(this);
    this.handleInputChangeImg = this.handleInputChangeImg.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      data: props.data
    }
  }

  handleInputChangeTitle(newInputValue) {
    this.props.data.onInputChangeTitle(newInputValue)
  }

  handleInputChangeDesc(newInputValue) {
    this.props.data.onInputChangeDesc(newInputValue)
  }

  handleInputChangeDiff(newInputValue) {
    this.props.data.onInputChangeDiff(newInputValue)
  }

  handleInputChangeImg(newInputValue) {
    this.props.data.onInputChangeImg(newInputValue)
  }

  render() {
    return (
      <div className="dashboardCreateCourseQuestion-root">
        <div className="dashboardCreateCourseQuestion-stepAndHintContainer">
          <HintBar hintType="neutral" hintText="Regardez l'aperçu en bas de votre écran pour vous aider" />
        </div>
        <div className="dashboardCreateCourseQuestion-question">
          Dites nous à quoi va ressembler votre cours
        </div>
        <div className="dashboardCreateCourseQuestion-answer">
          <div className="dashboardCreateCourseQuestion-answerSection">
            <div className="dashboardCreateCourseQuestion-answerSectionTitle">Saisissez son titre :</div>
            <DynamicInput inputType={this.state.data.statusTitle} inputSize={310} onChange={this.handleInputChangeTitle}/>
          </div>
          <div className="dashboardCreateCourseQuestion-answerSection">
            <div className="dashboardCreateCourseQuestion-answerSectionTitle">Saisissez sa description :</div>
            <DynamicInput inputType={this.state.data.statusDesc} inputSize={310} onChange={this.handleInputChangeDesc}/>
          </div>
          <div className="dashboardCreateCourseQuestion-answerSection">
            <div className="dashboardCreateCourseQuestion-answerSectionTitle">Saisissez son niveau de difficulté :</div>
            <DifficultyInput yeet="yeet" handleChangeDiff={this.handleInputChangeDiff}/>
          </div>
          <div className="dashboardCreateCourseQuestion-answerSection">
            <div className="dashboardCreateCourseQuestion-answerSectionTitle">Choisissez son image :</div>
            <ImageUpload handleChangeImg={this.handleInputChangeImg}/>
          </div>
        </div>
      </div>
    )
  }
}

/*

onInputChangeTitle: this.handleUpdateStepTitle,
                onInputChangeDesc: this.handleUpdateStepDesc,
                onInputChangeDiff: this.handleUpdateStepDiff,
                onInputChangeImg: this.handleUpdateStepImg,
<HintBar hintType={this.state.hintType} hintText={this.state.hintText}/>


hintText={props.hintText} hintType={props.hintType} questionText={props.questionText} questionStep={props.questionStep} onInputChange={props.onInputChange} onInputSubmit={props.onInputSubmit}
 */

//<div className="dashboardCreateCourseQuestion-question-centerfix">{this.state.questionText}</div>
export default DashboardCreateCourseQuestions;
