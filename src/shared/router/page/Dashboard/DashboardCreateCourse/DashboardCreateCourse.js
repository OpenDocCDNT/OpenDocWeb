import './DashboardCreateCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";
import ProgressBar from "../../../../ui/ProgressBar/ProgressBar";
import DashboardCreateCourseQuestions from "./CourseCreateQuestions/CourseCreateQuestions";
import CoursePreview from "../../../../ui/CoursePreview/CoursePreview";

function DashboardCreateCourse() {
  const history = useHistory();
  return <DashboardCreateCourseComp history={history}/>
}

class DashboardCreateCourseComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitStepTitle = this.handleSubmitStepTitle.bind(this);
    this.handleSubmitStepDesc = this.handleSubmitStepDesc.bind(this);
    this.handleSubmitStepDiff = this.handleSubmitStepDiff.bind(this);
    this.handleSubmitStepImg = this.handleSubmitStepImg.bind(this);
    this.state = {
      step: 1,
      newInputValue: "Fabriquez votre fauteuil de jardin en palettes",
      questionText: "Quel sera le nom de votre cours ?",
      hintType: 'important',
      hintText: 'Veuillez saisir un titre pour votre cours'
    }
    this.steps = [
      {
        questionText: "Quel sera le nom de votre cours ?",
        handleSubmitFunction: this.handleSubmitStepTitle,
        handleUpdateFunction: this.handleUpdateStepTitle,
      },
      {
        questionText: "Quelle sera la description de votre cours",
        handleSubmitFunction: this.handleSubmitStepDesc,
        handleUpdateFunction: this.handleUpdateStepDesc,
      },
      {
        questionText: "Quelle est la difficulté du cours ?",
        handleSubmitFunction: this.handleSubmitStepDiff,
        handleUpdateFunction: this.handleUpdateStepDiff,
      },
      {
        questionText: "Quelle sera la miniature de votre cours ?",
        handleSubmitFunction: this.handleSubmitStepImg,
        handleUpdateFunction: this.handleUpdateStepImg,
      }
    ]
  }

  handleSubmitStepTitle(inputValue) {

    if (inputValue.length < 8) {
      console.log(inputValue)
      this.setState({
        hintType: 'error',
        hintText: 'Veuillez saisir un titre de plus de 8 caractères'
      })
    }
  }

  handleUpdateStepTitle(inputValue) {
    console.log("Yeet2!")
  }


  handleSubmitStepDesc(inputValue) {
    console.log("Yeet2")
  }

  handleUpdateStepDesc(inputValue) {
    console.log("Yeet2")
  }

  handleSubmitStepDiff(inputValue) {
    console.log("Yeet2")
  }

  handleUpdateStepDiff(inputValue) {
    console.log("Yeet2")
  }

  handleSubmitStepImg(inputValue) {
    console.log("Yeet3")
  }

  handleUpdateStepImg(inputValue) {
    console.log("Yeet4")
  }


  handleInputChange(newInputValue) {
    this.steps[this.state.step-1].handleUpdateFunction(newInputValue);
    this.setState({
      newInputValue: newInputValue
    })
  }

  handleSubmit(inputValue) {
    this.steps[this.state.step-1].handleSubmitFunction(inputValue);

  }

  render() {
    return (
      <div className="dashboardCreateCourse-root">
        <div className="dashboardCreateCourse-centerFix">
          <div className="dashboardCreateCourse-mainTitle">Bienvenue sur la création de cours</div>
          <div className="dashboardCreateCourse-subTitle">C'est ici que tout commence, répondez à ce questionnaire pour débuter</div>
          <div className="dashboardCreateCourse-progressBar">
            <ProgressBar progressType="success" barSize={600} progressSize={100} text="Titre - 2"/>
          </div>
          <div className="dashboardCreateCourse-questions">
            <DashboardCreateCourseQuestions hintText={this.state.hintText} hintType={this.state.hintType} questionStep={this.state.step} questionText={this.state.questionText} onInputChange={this.handleInputChange} onInputSubmit={this.handleSubmit}/>
          </div>
          <div className="dashboardCreateCourse-preview">
            <CoursePreview courseImg="/src" courseTitle={this.state.newInputValue} courseText="Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois" courseDifficulty={3}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCreateCourse;
