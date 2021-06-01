import './DashboardCourseEditor.css';
import React from "react";
import {useHistory} from "react-router-dom";
import {fetchCreatorPost} from "../../../../utils/fetchCreator";
import editPenSvg from "../../../../img/svg/editPen.svg";
import CourseEditorChapterManager from "./CourseEditorChapterManager/CourseEditorChapterManager"

function DashboardCourseEditor(props) {
  const history = useHistory();
  return <DashboardCourseEditorComp history={history} courseId={props.courseId}/>
}

class DashboardCourseEditorComp extends React.Component {
  constructor(props) {
    super(props);
    this.initCourse = this.initCourse.bind(this)
    this._isMounted = false;
    this.state = {
      courseObject: false
    }
  }

  initCourse() {
    if (!this.props.courseId) return this.props.history.push('/dashboard')
    if (!localStorage.getItem("token"))  return this.props.history.push('/dashboard')
    let object = {
      token: localStorage.getItem("token"),
      lessonId: Number(this.props.courseId)
    }
    console.log(this.props.courseId)
    console.log(parseInt(this.props.courseId))
    fetchCreatorPost("http://127.0.0.1:8080/api/lesson/getOne", object)
      .then(response => {
        if (response.statusCode === 200) {
          console.log(response.statusCode + " ")
          this._isMounted && this.setState({
            courseObject: response.responseBody.lesson
          })
          return true
        } else {
          this.setState({
            courseObject: this.props.history.push('/dashboard')
          })
          return this.props.history.push('/dashboard')
        }
      }).catch(() => {
        return this.props.history.push('/dashboard')
    })
  }

  componentDidMount() {
    this._isMounted = true
    this._isMounted && this.initCourse()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="dashboardCourseEditor-root">
        <div className="dashboardCourseEditor-centerFix">
          <div className="dashboardCourseEditor-header">
            <div className="dashboardCourseEditor-editableHeaders">
              <div className="dashboardCourseEditor-editableHeaderDisplayerHeight">
                <div className="dashboardCourseEditor-editableHeader">
                  <div className="dashboardCourseEditor-editableHeaderInput">
                    Ceci est un titre
                    <img  className="dashboardCourseEditor-editableHeaderInputEditPen" src={editPenSvg} alt="edit"/>
                  </div>
                </div>
                <div className="dashboardCourseEditor-editableHeader">
                  <div className="dashboardCourseEditor-editableHeaderInput">
                    Diff
                    <img  className="dashboardCourseEditor-editableHeaderInputEditPen" src={editPenSvg} alt="edit"/>
                  </div>
                </div>
              </div>
              <div className="dashboardCourseEditor-editableHeaderDisplayer">
                <div className="dashboardCourseEditor-editableHeader">
                  <div className="dashboardCourseEditor-editableHeaderInput dashboardCourseEditor-editableHeaderInputDesc">
                    Desc
                    <img  className="dashboardCourseEditor-editableHeaderInputEditPen" src={editPenSvg} alt="edit"/>
                  </div>
                </div>
                <div className="dashboardCourseEditor-editableHeader">
                  <div className="dashboardCourseEditor-editableHeaderInput dashboardCourseEditor-editableHeaderInputDesc">
                    Img
                    <img  className="dashboardCourseEditor-editableHeaderInputEditPen" src={editPenSvg} alt="edit"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardCourseEditor-coursePreview">

            </div>
          </div>
          <CourseEditorChapterManager courseId={this.state.courseObject.id}/>
        </div>
      </div>
    )
  }
}

export default DashboardCourseEditor;
