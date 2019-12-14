import React, { Component, List, Container, Input, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import "../App.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
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
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

class HeaderClass extends Component {
  render() {
    return (
      <AppBar position="static" style={header}>
        <h1 style={{ fontWeight: "bold", marginLeft: "20px" }}>Medium</h1>
        <div className="App-header-div">
          <div>
            <SearchSharpIcon></SearchSharpIcon>
          </div>
          <div>
            <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
          </div>
          <div>
            <MenuItem>Menu</MenuItem>
          </div>
        </div>
      </AppBar>
    );
  }
}

export default HeaderClass;
