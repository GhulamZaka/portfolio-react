import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  // Link,
  // MenuItem,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import Navi from "../../components/Nav";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "primary",
    paddingRight: "79px",
    paddingLeft: "118px",
    height: "100px",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    fontSize: "60px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header(props) {
  const { header, toolbar, title, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography variant="h2" component="h1" className={title}>
          Ghulam Mustafa Zaka
        </Typography>
        <Navi setPage={props.setPage} />
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Navi setPage={props.setPage} />
            {/* {getDrawerChoices()} */}
          </div>
        </Drawer>

        <Typography variant="h2" component="h1" className={title}>
          Ghulam Mustafa Zaka
        </Typography>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
