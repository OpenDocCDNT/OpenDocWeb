import './ImageUpload.css';
import React from "react";
import imgUpload from "./../../img/svg/photoUpload.svg"

function ImageUpload(props) {
  return <ImageUploadComp handleChangeImg={props.handleChangeImg}/>
}

class ImageUploadComp extends React.Component {

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this)
    this.validateAndUpload = this.validateAndUpload.bind(this)
    this.state = {
      difficulty: 1,
      file: null
    }
    this.bubbles = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]
  }

  onFileChange = event => {
    if (this.validateAndUpload(event.target.files[0])) {
      this.props.handleChangeImg(event.target.files[0])
      this.setState({
        file : event.target.files[0]
      })
    }
  }

  validateAndUpload(input) {
      return input.size <= 2000000;
  }

  render() {

    return (
      <div className="imageUpload-root">
        <input type="file" name="profilePicture" accept="image/*" className="imageUpload-input" onChange={this.onFileChange}/>
        <div className={ this.state.file ? "imageUpload-display imageUpload-displayBgValid" : "imageUpload-display"}>
          <img className="imageUpload-imgUpload" src={imgUpload} alt="UPLOAD"/>
        </div>
      </div>
    )
  }
}

export default ImageUpload;
