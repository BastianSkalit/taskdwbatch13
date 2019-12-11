import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

/*log-in via facebook and gmail */
import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";

var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />
          <br />
        </div>
      </MuiThemeProvider>
    );
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent,
      loginRole: ""
    };
  }
  componentWillMount() {
    // console.log("willmount prop values",this.props);
    if (this.props.role != undefined) {
      if (this.props.role == "username") {
        console.log("in username componentWillMount");
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 1,
          loginComponent: localloginComponent,
          loginRole: "username"
        });
      } else if (this.props.role == "email") {
        console.log("in email componentWillMount");
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 2,
          loginComponent: localloginComponent,
          loginRole: "email"
        });
      }
    }
  }
  handleClick(event) {
    var self = this;
    var payload = {
      userid: this.state.username,
      password: this.state.password,
      role: this.state.loginRole
    };
  }
  handleMenuChange(value) {
    console.log("menuvalue", value);
    var loginRole;
    if (value == 1) {
      var localloginComponent = [];
      loginRole = "username";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username Id"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    } else if (value == 2) {
      var localloginComponent = [];
      loginRole = "email";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email Id"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    }
    this.setState({
      menuValue: value,
      loginComponent: localloginComponent,
      loginRole: loginRole
    });
  }
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="Login" />
        </MuiThemeProvider>
        {this.state.loginComponent}
        <GoogleLogin
          style={{ height: "10px", width: "10px" }}
          clientId="
          837365908680-qjhqdv8noa1ij0qp9u3i4m2h2og5849q.apps.googleusercontent.com
          " //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br />
        <br />
        <FacebookLogin
          appId="3817658878259593" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
