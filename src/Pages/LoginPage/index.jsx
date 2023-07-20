import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Container from "../../components/Container";
import Typography from "../../components/Typography";
import Images from "../../components/Images";
import Input from "../../components/Input";
import "./style.css";
export default class TestClass extends Component {
  state = {
    email: "",
    password: "",
    errorEmail: "",
    errorPassword: "",
  };

  handleChangeEmail = (event) => {
    const { value } = event.target;
    this.setState({ email: value, errorEmail: "" }, () => {
      const emailRegex = /^[a-z0-9.]+@gmail\.com$/;
      if (value !== "" && !emailRegex.test(value)) {
        this.setState({ errorEmail: "Please enter a valid email" });
      }
    });
  };

  handleChangePassword = (event) => {
    const { value } = event.target;
    this.setState({ password: value, errorPassword: "" }, () => {
      const passwordRegex =
        /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (value !== "" && !passwordRegex.test(value)) {
        this.setState({
          errorPassword:
            "Password must be 8 to 16 characters long and contain at least one number and one special character(!@#$%^&*).",
        });
      }
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const emailRegex = /^[a-z0-9.]+@gmail\.com$/;
    if (email === "") {
      this.setState({ errorEmail: "Please enter email" });
    } else if (!emailRegex.test(email)) {
      this.setState({
        errorEmail: "Please enter a valid email.",
      });
    } else {
      this.setState({ errorEmail: "" });
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/;
    if (password === "") {
      this.setState({ errorPassword: "Please enter password" });
    } else if (!passwordRegex.test(password)) {
      this.setState({
        errorPassword:
          "Password must be 8 to 16 characters long and contain at least one number and one special character (!@#$%^&*).",
      });
    } else {
      this.setState({ errorPassword: "" });
    }
  };

  render() {
    const { errorEmail, errorPassword } = this.state;
    const disableSubmit = errorEmail !== "" || errorPassword !== "";

    return (
      <main>
        <Container>
          <div className="login-page">
            <div className="box">
              <div className="logo">
                <Images src="/assets/images/mainLogo.svg" />
              </div>
              <div className="boxContent">
                <div className="content">
                  <p className="qut" id="qut">
                    “
                  </p>
                  <Typography variant="body1-i">
                    I always observe the people who pass by when I ride an
                    escalator. I'll never see most of them again, so I imagine a
                    lot of things about their lives... about the day ahead of
                    them.
                  </Typography>
                </div>
                <div className="image">
                  <Typography variant="h3">Hideo Kojima</Typography>
                  <Images src="/assets/images/signup mainImg.svg" />
                </div>
              </div>
            </div>
            <div className="login-form">
              <div className="header">
                <div className="content">
                  <Typography variant="h1">Join the game!</Typography>
                  <Typography variant="body2">
                    Go inside the best gamers social network!
                  </Typography>
                </div>
                <div className="social-icons">
                  <div className="icon">
                    <Icon
                      icon="flat-color-icons:google"
                      className="google ic"
                    />
                  </div>
                  <div className="icon">
                    <Icon icon="simple-icons:twitter" className="twitter ic" />
                  </div>
                  <div className="icon">
                    <Icon icon="basil:linkedin-solid" className="linkedin ic" />
                  </div>
                  <div className="icon">
                    <Icon icon="logos:github-icon" className="github ic" />
                  </div>
                </div>
                <div className="hr">
                  <p>or</p>
                </div>
              </div>
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <Typography variant="label">Your email</Typography>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Write Your Email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                    {errorEmail && (
                      <Typography variant="err" style={{ color: "red" }}>
                        {errorEmail}
                      </Typography>
                    )}
                  </div>
                  <div className="form-group">
                    <Typography variant="label">Your email</Typography>

                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Write Your Password"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                    />
                    {errorPassword && (
                      <Typography variant="err" style={{ color: "red" }}>
                        {errorPassword}
                      </Typography>
                    )}
                  </div>
                  <div className="form-group">
                    <Input
                      type="submit"
                      value="Login"
                      disabled={disableSubmit}
                    />
                  </div>
                  <div className="label">
                    <Typography variant="label">
                      Don’t have an account?{" "}
                      <a href="../SignupPage/index.jsx">Register</a>
                    </Typography>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </main>
    );
  }
}
<div></div>;
