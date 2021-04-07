import './DashboardCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";
import {BoxGeometry, HemisphereLight, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three'

function DashboardCourse() {
  const history = useHistory();
  return <DashboardCourseComp history={history}/>
}

class DashboardCourseComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnDiv: false,
      currentWidth: 0,
      currentHeight: 0
    }
  }

  componentDidMount() {
    const threeContainer = document.getElementById("threeContainer");
    this.setState({
      currentWidth: threeContainer.offsetWidth,
      currentHeight: threeContainer.offsetHeight
    })
    let scene = new Scene();
    let camera = new PerspectiveCamera(70, threeContainer.offsetWidth / threeContainer.offsetHeight, 0.1, 1000);
    let renderer = new WebGLRenderer({
      antialias: true
    })

    renderer.setSize(threeContainer.offsetWidth, threeContainer.offsetHeight);
    threeContainer.appendChild(renderer.domElement);

    let geometry = new BoxGeometry(1, 1, 1);
    let material = new MeshStandardMaterial({
      color: 0xff0080
    })
    let cube = new Mesh(geometry, material);
    scene.add(cube);
    const light = new HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    camera.position.z = 2;

    let animate = () => {
      requestAnimationFrame(animate);
      if (this.state.currentWidth !== threeContainer.offsetWidth || this.state.currentHeight !== threeContainer.offsetHeight) {
        camera.aspect = threeContainer.offsetWidth / threeContainer.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(threeContainer.offsetWidth, threeContainer.offsetHeight)

        this.setState({
          currentWidth: threeContainer.offsetWidth,
          currentHeight: threeContainer.offsetHeight
        })
      }
      let rotationRatio = 0.01
      if (this.state.isOnDiv) {
        rotationRatio = 0.05;
      }
      cube.rotation.x += rotationRatio;
      cube.rotation.y += rotationRatio;
      cube.rotation.z += rotationRatio;

      renderer.render(scene, camera)
    }

    threeContainer.addEventListener("mouseenter", () => {
      this.setState({
        isOnDiv: true
      })
    })

    threeContainer.addEventListener("mouseleave", () => {
      this.setState({
        isOnDiv: false
      })
    })

    threeContainer.addEventListener("resize", () => {

    })

    animate();
  }

  render() {
    return (
      <div id="threeContainer" className="dashboardCourse-root">
      </div>
    )
  }
}

export default DashboardCourse;
