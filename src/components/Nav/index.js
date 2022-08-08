import React from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
// import Box from "@mui/material/Box";

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    // textItems: "right",
  },
}));

export default function Navi(props) {
  const { nav } = useStyles();
  return (
    <Tabs>
      <Tab
        className={nav}
        label="About"
        onClick={() => props.setPage("About")}
      />
      <Tab
        className={nav}
        label="Portfolio"
        onClick={() => props.setPage("Portfolio")}
      />
      <Tab
        className={nav}
        label="Contact"
        onClick={() => props.setPage("Contact")}
      />
      <Tab
        className={nav}
        label="Resume"
        onClick={() => props.setPage("Resume")}
      />
    </Tabs>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

// export default function Navi() {
//   const [activeTab, setActiveTab] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={activeTab}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="About me" value="1" />
//             <Tab label="Portfolio" value="2" />
//             <Tab label="Contact" value="3" />
//             <Tab label="Resume" value="4" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//         <TabPanel value="4">Item </TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
