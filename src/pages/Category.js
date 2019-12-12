import React, { Component, List, Container, Input, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const arrowBack = (
  <div className="App-arrow-back-text">
    <span>&#60;</span>
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const header = {
  display: "flex",
  width: "100%",
  fontStyle: "normal",
  backgroundColor: "#fff",
  color: "rgba(0,0,0,.54)",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "right",
  boxShadow: "none"
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    fontSize: "10px",
    fontFamily: "sans-serif",
    letterSpacing: 0,
    fontWeight: "400",
    fontStyle: "normal",
    backgroundColor: "#fff",
    color: "rgba(0,0,0,.54)"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

class Category extends Component {
  render() {
    return (
      <div className="App-category">
        <div className="App-arrow-back-text">
          <span>&#60;</span>
        </div>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/onezero">
          <div>ONEZERO</div>
        </Link>
        <Link to="/elemental">
          <div>ELEMENTAL</div>
        </Link>
        <div>GEN</div>
        <div>ZORA</div>
        <div>FORGE</div>
        <div>HUMAN PARTS</div>
        <div>MARKER</div>
        <div>LEVEL</div>
        <div>HEAT</div>
        <div className="App-arrow-back-text">
          <span>&#62;</span>
        </div>
      </div>
    );
  }
}
export default Category;
