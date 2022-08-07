import React from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    fontSize: "30px",
  },
}));

export default function Navi(props) {
  const { nav } = useStyles();
  return (
    <Tabs align="right">
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
