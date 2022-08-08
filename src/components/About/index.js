import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// const useStyles = makeStyles(() => ({
//   title: {},
//   text: {},
// }));

function About() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="lg"
          color="text.primary"
          gutterBottom
        >
          About me
        </Typography>
        <AccountCircleIcon sx={{ width: 32, height: 32 }} />
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Front End web developer with a background in administrative and
          finance management. Trained at the University of California Davis
          Coding Bootcamp as a Full Stack Web Developer. Proficient in Java, CSS
          and HTML. Dedicated to learning additional technologies and coding
          languages. Innovative problem-solver passionate about developing apps;
          focused on mobile-first design and development. Built several websites
          individually and as a group project and deployed into GitHub and
          Heroku.
        </Typography>
      </Container>
    </Box>
    // <Container sx={{ py: 8 }} maxWidth="md"></Container>
  );
}

export default About;
