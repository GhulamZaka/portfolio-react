// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   IconButton,
//   Drawer,
//   // Link,
//   // MenuItem,
// } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import MenuIcon from "@material-ui/icons/Menu";

// import Navi from "../../components/Nav";

// const useStyles = makeStyles(() => ({
//   header: {
//     backgroundColor: "primary",
//     paddingRight: "80px",

//     justifyContent: "center",
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   title: {
//     fontFamily: "Work Sans, sans-serif",
//     fontWeight: 600,
//     color: "#FFFEFE",
//     textAlign: "left",
//   },
//   drawerContainer: {
//     padding: "20px 30px",
//   },
// }));

// export default function Header(props) {
//   const { header, toolbar, title, drawerContainer } = useStyles();
//   const [state, setState] = useState({
//     mobileView: false,
//     drawerOpen: false,
//   });

//   const { mobileView, drawerOpen } = state;

//   useEffect(() => {
//     const setResponsiveness = () => {
//       return window.innerWidth < 900
//         ? setState((prevState) => ({ ...prevState, mobileView: true }))
//         : setState((prevState) => ({ ...prevState, mobileView: false }));
//     };

//     setResponsiveness();
//     window.addEventListener("resize", () => setResponsiveness());

//     return () => {
//       window.removeEventListener("resize", () => setResponsiveness());
//     };
//   }, []);

//   const displayDesktop = () => {
//     return (
//       <Toolbar className={toolbar}>
//         <Typography variant="h3" component="h1" className={title}>
//           Ghulam Mustafa Zaka
//         </Typography>
//         <Navi setPage={props.setPage} />
//       </Toolbar>
//     );
//   };

//   const displayMobile = () => {
//     const handleDrawerOpen = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: true }));
//     const handleDrawerClose = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: false }));

//     return (
//       <Toolbar>
//         <IconButton
//           {...{
//             edge: "start",
//             color: "inherit",
//             "aria-label": "menu",
//             "aria-haspopup": "true",
//             onClick: handleDrawerOpen,
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Drawer
//           {...{
//             anchor: "left",
//             open: drawerOpen,
//             onClose: handleDrawerClose,
//           }}
//         >
//           <div className={drawerContainer}>
//             <Navi setPage={props.setPage} />
//             {/* {getDrawerChoices()} */}
//           </div>
//         </Drawer>

//         <Typography variant="h2" component="h1" className={title}>
//           Ghulam Mustafa Zaka
//         </Typography>
//       </Toolbar>
//     );
//   };

//   return (
//     <header>
//       <AppBar className={header}>
//         {mobileView ? displayMobile() : displayDesktop()}
//       </AppBar>
//     </header>
//   );
// }

// import { makeStyles } from "@material-ui/core";
// import React from "react";
// const useStyles = makeStyles(() => ({
//   head: {
//     backgroundColor: "#282c34",
//     marginTop: "0px",
//     height: "100px",
//     justifyContent: "center",
//     fontSize: "50px",
//     paddingLeft: "70px",
//   },
// }));

// function Header() {
//   const { head } = useStyles();
//   return (
//     <div>
//       <h2 className={head}>Ghulam Mustafa Zaka</h2>
//     </div>
//   );
// }

// export default Header;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navi from "../../components/Nav";

const theme = createTheme();

export default function Header(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ghulam Mustafa Zaka
          </Typography>
          <Box>
            <Navi setPage={props.setPage} />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
