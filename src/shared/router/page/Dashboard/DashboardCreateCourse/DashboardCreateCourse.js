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
    this.state = {
      step: 0
    }
  }

  render() {
    return (
      <div className="dashboardCreateCourse-root">
        <div className="dashboardCreateCourse-centerFix">
          <div className="dashboardCreateCourse-mainTitle">Bienvenue sur la création de cours</div>
          <div className="dashboardCreateCourse-subTitle">C'est ici que tout commence, répondez à ce questionnaire pour débuter</div>
          <div className="dashboardCreateCourse-progressBar">
            <ProgressBar progressType="success" barSize={600} progressSize={10} text="Titre - 1"/>
          </div>
          <div className="dashboardCreateCourse-questions">
            <DashboardCreateCourseQuestions />
          </div>
          <div className="dashboardCreateCourse-preview">
            <CoursePreview courseImg="/src" courseTitle="Fabriquez votre fauteuil de jardin en palettes" courseText="Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois" courseDifficulty={3}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCreateCourse;
