import React, {Component} from 'react';
import {Container, Grid, useScrollTrigger, Box, Slide, Hidden, IconButton, CardMedia, Button, CardContent, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import Icons
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

// import Images

import Images from './img/images.jpeg';
import Img1 from './img/1.jpeg';
import Img2 from './img/2.jpeg';
import Img3 from './img/3.jpeg';
import Img4 from './img/4.jpeg';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// list of items
const list = [
  { name: 'HOME' },
  { name: 'ONEZERO' },
  { name: 'ELEMENTAL' },
  { name: 'GEN' },
  { name: 'ZORA' },
  { name: 'FORGE' },
  { name: 'HUMAN PARTS' },
  { name: 'MARKER' },
  { name: 'LEVEL' },
  { name: 'HEATED'},
  { name: 'MODUS'},
  { name: 'MORE'}
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'Home';

class Home extends Component {

  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }

  render(){
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div>
      <Router>
      <Container maxWidth="lg">
      {/* <HideOnScroll> */}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box><h1 className="logo">Medium</h1></Box>
            </Grid>
            <Grid item xs={6}>
            <div>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
                <Box>
                    <IconButton aria-label="search" color="inherit" className="space">
                      <SearchIcon style={{color: '#7A7A7A'}}/>
                    </IconButton>
                    <IconButton >
                      <span style={{fontSize: '80%'}}>
                      <i className="far fa-bell"></i>
                      </span>
                    </IconButton>
                    <Hidden smDown>
                    <div><a href="https://www.instagram.com/" variant="outlined" style={{fontSize: 13, textTransform: 'none', fontFamily: 'Roboto', fontWeight: 400}}>Upgrade</a>
                    </div></Hidden>
                    <IconButton>
                      <i className="fas fa-user-circle"></i>
                    </IconButton>
                </Box>
              </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      {/* </HideOnScroll> */}

      <Container>
      <center>
        <div className="App" style={{width: '95%', color: 'black', marginBottom: 25}}>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
        </center>
      </Container>

      <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={Images}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Do Not Give Up Girl
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Both regular and decaf boost your health
              </Typography>
            </CardContent>
            </Grid>
            <Grid item xs style={{paddingLeft: 20}}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
                  <CardMedia style={{width: '100px'}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={Img1}
                    title="Contemplative Reptile"
                  />
                <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                  <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18}}>
                    Do Not Give Up Coffee
                  </Typography>
                  <Typography variant="body2" color="initial" component="p" style={{fontSize: 13}}>
                    Brianna Wiest in Human Parts
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                    Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"/></span>
                  </Typography>
                </CardContent>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
                  <CardMedia style={{width: '100px'}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={Img2}
                    title="Contemplative Reptile"
                  />
                <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                  <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18}}>
                    Do Not Give Up Guys
                  </Typography>
                  <Typography variant="body2" color="initial" component="p" style={{fontSize: 13}}>
                    Brianna Wiest in Human Parts
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                    Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                  </Typography>
                </CardContent>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
                  <CardMedia style={{width: '100px'}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={Img3}
                    title="Contemplative Reptile"
                  />
                <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                  <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18}}>
                    Do Not Give Up brother
                  </Typography>
                  <Typography variant="body2" color="initial" component="p" style={{fontSize: 13}}>
                    Brianna Wiest in Human Parts
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                    Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                  </Typography>
                </CardContent>
            </div>
          </Grid>
            <Hidden smDown>
              <Grid item md={4} xs={12}>
                <CardMedia

                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={Img4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    Do Not Give Up health
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Both regular and decaf boost your health
                  </Typography>
                </CardContent>
                </Grid>
            </Hidden>
        </Grid>
        <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
            <Link to="/" className="noborder"><p className="termpriv">SEE ALL FEATURED <i className="fas fa-chevron-right"> </i></p></Link>
        </Box>
        <Box borderBottom={1} style={{color: '#B9BABD'}}></Box>

        <Grid container spacing={2}>
          <Grid item md={7}>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Typography variant="body2" color="initial" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="30%"
                      image={Img1}
                      title="Contemplative Reptile"
                    />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Typography variant="body2" color="initial" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in lissa Chu in The Startup
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="30%"
                      image={Img1}
                      title="Contemplative Reptile"
                    />
              </div>
          </Grid>
          <Grid item md>
          <h2 className="popular">Popular on Medium</h2>
          <Box borderBottom={1} style={{color: '#B9BABD', width: '300px', marginLeft: 33}}></Box>

             <Grid container spacing={2}>
              <Grid item xs={2}>
                <h2 className="Number">01</h2>
              </Grid>
              <Grid item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body2" color="initial" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <h2 className="Number">01</h2>
              </Grid>
              <Grid item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body2" color="initial" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <h2 className="Number">01</h2>
              </Grid>
              <Grid item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body2" color="initial" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i className="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Router>
      </div>
    );
  }
}
 

export default Home;