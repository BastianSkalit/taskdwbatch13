import React , {Component} from 'react';
import './style.css';
import left from './img/left.png';
import right from './img/right.png';
import {Box, Container, Grid, Hidden, TextField} from '@material-ui/core';
import {Link} from "react-router-dom";

class register extends Component {
  render(){
    return(
      <div>
          <Container maxWidth="md" style={{marginTop: 5}}>
              <Box className="bg-color" borderRadius="borderRadius" border={1} borderColor="#BCBCBC">
                <Grid container spacing={1}>
              {/* Image left */}
                  <Hidden smDown>
                    <Grid item xs>
                      <img src={left} width="80%"/>
                    </Grid>
                  </Hidden>
              {/* Close Image left */}

                    {/* Register */}
                    <Grid item xs={12} sm={12} md={6}>
                        <h2 className="fontwhite"> Join Medium. </h2>
                        <p className="subject"> Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.  </p>

                        <form noValidate autoComplete="off">
                          <p className="youremail">Your username</p>
                          <center><TextField className="input" id="standard-basic"/></center>
                          <p className="youremail">Your password</p>
                          <center><TextField className="input" id="standard-basic"/></center>
                          <p className="youremail">Your Email</p>
                          <center><TextField className="input" id="standard-basic"/></center>

                          <center><div style={{marginTop: 20}}><Link to="login" type="submit" className="btn-regis"> Registration </Link></div></center>
                        </form>

                        <h4 className="signin">Already have an account? <a href="https://www.facebook.com/bastian.lauren.37?ref=bookmarks">Sign in</a></h4>

                        <p className="termpriv"> To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy. </p>
                    </Grid>
                    {/* Close Register */}

                    {/* Image Right */}

                    <Hidden smDown>
                      <Grid item xs>
                      <img style={{marginLeft: 43}} src={right} width="80%"/>
                      </Grid>
                    </Hidden>

                    {/* Close Image Right */}

                  </Grid>
              </Box>
          </Container>
      </div>
    );
  }
}

export default register;