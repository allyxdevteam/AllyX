import { useState } from "react";
import PropTypes from "prop-types";

import UserReport from "./Reports/UserReport";
import CommentReport from "./Reports/CommentReport";
import ReportReport from "./Reports/ReportReport";
import CallReport from "./Reports/CallReport";

import { Box, Tab, Tabs, Typography } from "@mui/material";

// a11y config for admin dashboard nav bar
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AdminDashboard() {

  const [view, setView] = useState(0);

  const handleChange = (event, newView) => {
    setView(newView);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={view}
          onChange={handleChange}
          aria-label="allyx admin dashboard"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
          <Tab label="Calls" {...a11yProps(2)} />
          <Tab label="Ratings" {...a11yProps(3)} />
          <Tab label="Reports" {...a11yProps(4)} />
          <Tab label="Ally Applications" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={view} index={0}>
        <UserReport />
      </TabPanel>
      <TabPanel value={view} index={1}>
        <CommentReport />
      </TabPanel>
      <TabPanel value={view} index={2}>
        <CallReport />
      </TabPanel>
      <TabPanel value={view} index={3}>
        Ratings
      </TabPanel>
      <TabPanel value={view} index={4}>
        <ReportReport />
      </TabPanel>
      <TabPanel value={view} index={5}>
        Ally Applications
      </TabPanel>
    </Box>
  );
}

export default AdminDashboard;
