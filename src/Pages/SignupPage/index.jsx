import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import Typography from "../../components/Typography";
import Images from "../../components/Images";
import { Icon } from "@iconify/react";
import Input from "../../components/Input";
import { Link } from 'react-router-dom';


import "./style.css";

export default class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    phone: "",
    repeatPassword: "",
    errorEmail: "",
    errorPassword: "",
    errorUsername: "",
    errorPhone: "",
    errorRepeatPassword: "",
    isTermsChecked: "",
    showPassword1: false,
    showPassword2: false,
  };

  togglePasswordVisibility1 = () => {
    this.setState((prevState) => ({
      showPassword1: !prevState.showPassword1,
    }));
  };

  togglePasswordVisibility2 = () => {
    this.setState((prevState) => ({
      showPassword2: !prevState.showPassword2,
    }));
  };

  handleChangeUsername = (event) => {
    const { value } = event.target;
    this.setState({ username: value, errorUsername: "" }, () => {
      const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,16}$/;
      if (value !== "" && !usernameRegex.test(value)) {
        this.setState({
          errorUsername:
            "Please enter a valid username. A valid username contains only lowercase and uppercase letters, numbers 0-9, and has a length of 3-16 characters.",
        });
      }
    });
  };

  handleChangeEmail = (event) => {
    const { value } = event.target;
    this.setState({ email: value, errorEmail: "" }, () => {
      const emailRegex = /^[a-z0-9.]+@gmail\.com$/;
      if (value !== "" && !emailRegex.test(value)) {
        this.setState({
          errorEmail:
            "Please enter a valid email. A valid email contains only lowercase letters, numbers 0-9, and periods (.)",
        });
      }
    });
  };

  handleChangePhone = (event) => {
    const { value } = event.target;
    this.setState({ phone: value, errorPhone: "" }, () => {
      const phoneRegex = /^\+?\d{10,15}$/;
      if (value !== "" && !phoneRegex.test(value)) {
        this.setState({
          errorPhone:
            "Please enter a valid phone number. A valid phone number contains digits 0-9 and has a length of 10-15 digits.",
        });
      }
    });
  };

  handleChangePassword = (event) => {
    const { value } = event.target;
    this.setState({ password: value, errorPassword: "" }, () => {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (value !== "" && !passwordRegex.test(value)) {
        this.setState({
          errorPassword:
            "Password must be 8 to 16 characters long and contain at least one number and one special character (!@#$%^&*).",
        });
      }
    });
  };

  handleChangeRepeatPassword = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { password, repeatPassword } = this.state;
      if (name === "password") {
        if (repeatPassword !== "" && password !== repeatPassword) {
          this.setState({ errorRepeatPassword: "Passwords do not match" });
        } else {
          this.setState({ errorRepeatPassword: "" });
        }
      } else if (name === "repeatPassword") {
        if (password !== value) {
          this.setState({ errorRepeatPassword: "Passwords do not match" });
        } else {
          this.setState({ errorRepeatPassword: "" });
        }
      }
    });
  };

  handleCheckboxChange = (event) => {
    this.setState({
      isTermsChecked: event.target.checked,
      errorTerms: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username, phone, repeatPassword, isTermsChecked } =
      this.state;

    // Validate username
    const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,16}$/;
    if (username === "") {
      this.setState({ errorUsername: "Please enter a username" });
    } else if (!usernameRegex.test(username)) {
      this.setState({
        errorUsername:
          "Please enter a valid username. A valid username contains only lowercase and uppercase letters, numbers 0-9, and has a length of 3-16 characters.",
      });
    } else {
      this.setState({ errorUsername: "" });
    }

    // Validate email
    const emailRegex = /^[a-z0-9.]+@gmail\.com$/;
    if (email === "") {
      this.setState({ errorEmail: "Please enter an email" });
    } else if (!emailRegex.test(email)) {
      this.setState({
        errorEmail:
          "Please enter a valid email. A valid email contains only lowercase letters, numbers 0-9, and periods (.)",
      });
    } else {
      this.setState({ errorEmail: "" });
    }

    // Validate phone
    const phoneRegex = /^\+?\d{10,15}$/;
    if (phone === "") {
      this.setState({ errorPhone: "Please enter a phone number" });
    } else if (!phoneRegex.test(phone)) {
      this.setState({
        errorPhone:
          "Please enter a valid phone number. A valid phone number contains digits 0-9 and has a length of 10-15 digits.",
      });
    } else {
      this.setState({ errorPhone: "" });
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (password === "") {
      this.setState({ errorPassword: "Please enter a password" });
    } else if (!passwordRegex.test(password)) {
      this.setState({
        errorPassword:
          "Password must be 8 to 16 characters long and contain at least one number and one special character (!@#$%^&*).",
      });
    } else {
      this.setState({ errorPassword: "" });
    }

    // Validate repeat password
    if (repeatPassword === "") {
      this.setState({
        errorRepeatPassword: "Please enter the repeated password",
      });
    } else if (password !== repeatPassword) {
      this.setState({ errorRepeatPassword: "Passwords do not match" });
    } else {
      this.setState({ errorRepeatPassword: "" });
    }

    // Validate terms checkbox
    if (!isTermsChecked) {
      this.setState({ errorTerms: "Please agree to the terms and conditions" });
    } else {
      this.setState({ errorTerms: "" });
    }
  };

  render() {
    const {
      errorEmail,
      errorPassword,
      errorUsername,
      errorPhone,
      errorRepeatPassword,
      errorTerms,
      showPassword1,
      showPassword2,
    } = this.state;
    const disableSubmit =
      errorEmail !== "" ||
      errorPassword !== "" ||
      errorRepeatPassword !== "" ||
      errorPhone !== "" ||
      errorTerms !== "" ||
      errorUsername !== "";

    const hideIcon = <Icon icon="bxs:hide" />;
    const showIcon = <Icon icon="zondicons:view-show" />;

    return (
      <main className="signup">
        <div className="left">
          <Overlay>
            <div className="logo">
              <Images src="assets/images/logo.svg" />
            </div>
            <div className="content">
              <p className="qut">“</p>
              <Typography variant="body1">
                I always observe the people who pass by when I ride an
                escalator. I'll never see most of them again, so I imagine a lot
                of things about their lives... about the day ahead of them.
              </Typography>
              <Typography variant="body1">Hideo Kojima</Typography>
            </div>
          </Overlay>
        </div>

        <div className="login-form">
          <div className="header">
            <div className="backBtn">
              <a href="../LoginPage/index.jsx">
                <Icon icon="ic:sharp-arrow-back-ios" />
              </a>
              <Typography variant="label">Back</Typography>
            </div>
            <Typography variant="h2">Register Individual Account!</Typography>
            <Typography variant="body2">
              For the purpose of gamers regulation, your details are required.
            </Typography>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <Typography variant="label">Username*</Typography>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Write Your Username"
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                />
                {errorUsername && (
                  <Typography variant="err" style={{ color: "red" }}>
                    {errorUsername}
                  </Typography>
                )}
              </div>

              <div className="form-group">
                <Typography variant="label">Email address*</Typography>
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
                <Typography variant="label">Phone Number*</Typography>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Write Your Phone Number"
                  value={this.state.phone}
                  onChange={this.handleChangePhone}
                />
                {errorPhone && (
                  <Typography variant="err">{errorPhone}</Typography>
                )}
              </div>

              <div className="form-group">
                <Typography variant="label">Create password*</Typography>
                <Input
                  type={showPassword1 ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Write Your Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
                <i onClick={this.togglePasswordVisibility1}>
                  {showPassword1 ? hideIcon : showIcon}
                </i>
                {errorPassword && (
                  <Typography variant="err" style={{ color: "red" }}>
                    {errorPassword}
                  </Typography>
                )}
              </div>

              <div className="form-group">
                <Typography variant="label">Repeat password*</Typography>
                <Input
                  type={showPassword2 ? "text" : "password"}
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Write Your Repeat Password"
                  value={this.state.repeatPassword}
                  onChange={this.handleChangeRepeatPassword}
                />
                <i onClick={this.togglePasswordVisibility2}>
                  {showPassword2 ? hideIcon : showIcon}
                </i>
                {errorRepeatPassword && (
                  <Typography variant="err" style={{ color: "red" }}>
                    {errorRepeatPassword}
                  </Typography>
                )}
              </div>

              <div className="form-checkbox">
                <label htmlFor="ch1">
                  <Input
                    id="ch1"
                    type="checkbox"
                    onChange={this.handleCheckboxChange}
                  />
                  I agree to terms & conditions
                </label>
                {errorTerms && (
                  <Typography variant="err" style={{ color: "red" }}>
                    {errorTerms}
                  </Typography>
                )}
              </div>

              <div className="form-group">
                <Input
                  type="submit"
                  value="Register Account"
                  disabled={disableSubmit}
                />
              </div>

              <div className="form-group">
                {/* <a href="../LoginPage/index.jsx">Login</a> */}
                <Link to="/login">Login</Link>

              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
