import React , {Component} from 'react';
import './style.css';
import {Box, Container, Grid, TextField} from '@material-ui/core';
import {Link} from "react-router-dom"
class login extends Component {
  render(){
    return(
      <div>
          <Container maxWidth="md" style={{marginTop: 5}}>
              <Box className="bg-color" borderRadius="borderRadius" border={1} borderColor="#BCBCBC">
                <Grid container spacing={1}>


                    {/* Register */}
                    <Grid item xs={12} sm={12} md={12}>
                        <h2 className="fontwhite">Please Login </h2>
                        <p className="subject">Search, Booking, Payment And Enjoy :)</p>

                        <form noValidate autoComplete="off">
                          <p className="youremail">Your username</p>
                          <center><TextField className="input" id="standard-basic"/></center>
                          <p className="youremail">Your password</p>
                          <center><TextField className="input" id="standard-basic"/></center>

                          <center><div style={{marginTop: 20}}><Link to="home" type="submit" className="btn-regis"> Login </Link></div></center>
                        </form>


                        <p className="termpriv"> To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy. </p>
                    </Grid>
                    {/* Close Register */}


                  </Grid>
              </Box>
          </ Container>
      </div>
    );
  }
}

export default login;