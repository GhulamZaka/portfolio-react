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

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ flexGrow: 1 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction value="folder" icon={<LinkedInIcon />} />
      <BottomNavigationAction value="favorites" icon={<GitHubIcon />} />
      <BottomNavigationAction value="nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
