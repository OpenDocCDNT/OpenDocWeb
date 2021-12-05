import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { fetchCreatorPost } from "../../../utils/fetchCreator";
import "./Login.css";
import logo from "./../../../img/svg/logo.svg";
import url from "./../../../utils/commonParameters.js";

function Login() {
  const { action } = useParams();
  const history = useHistory();
  if (action === "signup") {
    return <SignUp history={history} />;
  } else if (action === "signin") {
    return <SignIn history={history} />;
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
    this.state = {
      registered: false,
    };
  }

  goBackHome() {
    this.props.history.push("../");
  }

  handleRegister() {
    const usernameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("password").value;
    const errorSpan = document.getElementById("errorSpan");
    if (usernameValue.length < 1) {
      return (errorSpan.innerHTML = "Veuillez spécifier un nom.");
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailValue
      )
    ) {
      return (errorSpan.innerHTML = "Veuillez entrer une adresse mail valide");
    }
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/.test(passValue) &&
      passValue.length < 8
    ) {
      return (errorSpan.innerHTML =
        "Votre mot de passe doit contenir au minimum une majuscule," + 
        "n caractère spécial, une minuscule et un chiffre. Votre mot de passe doit faire au minimum 8 caractères");
    }

    let params = {
      username: usernameValue,
      email: emailValue,
      password: passValue,
    };

    fetchCreatorPost(url + "/auth/register", params)
      .then((response) => {
        if (response === undefined) {
          return (errorSpan.innerHTML = "Erreur 500 !");
        }
        if (response.statusCode !== 200 && response.statusCode !== 418) {
          return (errorSpan.innerHTML = "Erreur 500 !");
        }
        if (response.statusCode === 418) {
          return (errorSpan.innerHTML =
            "Un compte avec la même adresse mail existe déjà.");
        }
        //SUCCESS
        this.setState({
          registered: true,
        });
        errorSpan.innerHTML = "";
        setTimeout(() => {
          this.props.history.push("../login/signin");
        }, 3000);
      })
      .catch(() => {
        return (errorSpan.innerHTML = "Erreur 500 !");
      });
  }

  render() {
    return (
      <div className="LoginPage-root">
        <div className="LoginPage-body">
          <img
            className="landingPage-titleLogo"
            src={logo}
            alt="OpenDoc"
            onClick={this.goBackHome}
          />
          <div className="landingPage-Form">
            <h1 className="LoginPage-HeadTitleSignUp">INSCRIPTION</h1>
            <div className="LoginPage-userDetail">
              <div className="loginPage-inputBox">
                <label htmlFor="name">Pseudo</label>
                <input id="name" type="text" />
              </div>
              <div className="loginPage-inputBox">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
              </div>
              <div className="loginPage-inputBox">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
            </div>
            <div className="LoginPage-btnRegister">
              <button onClick={this.handleRegister}>INSCRIPTION</button>
            </div>
            {this.state.registered ? (
              <p>
                Vous serez rediriger vers la page de connexion dans 3s, si cela
                ne fonctionne pas cliquez ici :{" "}
                <Link to="../login/signin">Connectez-vous !</Link>
              </p>
            ) : (
              <p className="LoginPage-text">
                Vous avez dèjà un compte ?{" "}
                <Link to="../login/signin"> Connectez-vous !</Link>
              </p>
            )}
            <span id="errorSpan" />
          </div>
        </div>
      </div>
    );
  }
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleConnect = this.handleConnect.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
    this.state = {
      logged: false,
    };
  }

  goBackHome() {
    this.props.history.push("../");
  }

  handleConnect() {
    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("password").value;
    const errorSpan = document.getElementById("errorSpan");
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailValue
      )
    ) {
      return (errorSpan.innerHTML += "Veuillez entrer une adresse mail valide");
    }

    let params = {
      email: emailValue,
      password: passValue,
    };
    fetchCreatorPost(url + "/auth/login", params)
      .then((response) => {
        if (response === undefined) {
          return (errorSpan.innerHTML = "Erreur 500 !");
        }
        if (response.statusCode !== 200) {
          return (errorSpan.innerHTML =
            "Votre mot de passe ou votre email est incorrect ! Veuillez réessayé ");
        }
        //SUCCESS
        let responseBody = response.responseBody;
        localStorage.setItem("token", responseBody.token);
        this.setState({
          logged: true,
        });
        errorSpan.innerHTML = "";
        setTimeout(() => {
          this.props.history.push("/dashboard");
        }, 3000);
      })
      .catch(() => {
        return (errorSpan.innerHTML = "Erreur 500 !");
      });
  }

  render() {
    return (
      <div className="LoginPage-root">
        <div className="LoginPage-body">
          <img className="landingPage-titleLogo" src={logo} alt="OpenDoc" />
          <div className="landingPage-Form">
            <h1 className="LoginPage-HeadTitleSignUp">CONNEXION</h1>
            <div className="LoginPage-userDetail">
              <div className="loginPage-inputBox">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
              </div>
              <div className="loginPage-inputBox">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
            </div>
            <div className="LoginPage-btnRegister">
              <button onClick={this.handleConnect}>SE CONNECTER</button>
            </div>
            {this.state.logged ? (
              <p>
                Vous serez rediriger vers votre tableau de bord dans 3s, si cela
                ne fonctionne pas cliquez ici :{" "}
                <Link to="../dashboard">Tableau de bord</Link>
              </p>
            ) : (
              <p>
                Vous n'avez pas de compte ?{" "}
                <Link to="../login/signup">Inscrivez-vous !</Link>
              </p>
            )}
            <span id="errorSpan" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
