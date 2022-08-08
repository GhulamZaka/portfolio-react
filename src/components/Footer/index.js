// import React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";

// function Footer() {
//   return (
//     <footer>
//       <Box>
//         <Container maxWidth="lg">
//           <Grid container spacing={5}>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Foooooooter</Box>
//               <Link href="/" color="inherit">
//                 linkedin
//               </Link>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </footer>
//   );
// }

// export default Footer;

// import * as React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// export default function Footer() {
//   const [value, setValue] = React.useState("recents");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation
//       sx={{ flexGrow: 1 }}
//       value={value}
//       onChange={handleChange}
//     >
//       <BottomNavigationAction value="folder" icon={<LinkedInIcon />} />
//       <BottomNavigationAction value="favorites" icon={<GitHubIcon />} />
//       <BottomNavigationAction value="nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   );
// }

import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// const theme = createTheme();

export default function Footer() {
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 10, alignItems: "center" }}
      component="footer"
    >
      {/* <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography> */}

      <GitHubIcon sx={{ mr: 10 }} />
      <LinkedInIcon sx={{ mr: 10 }} />
      <CameraIcon sx={{ mr: 10 }} />
    </Box>
  );
}
