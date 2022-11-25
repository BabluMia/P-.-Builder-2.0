import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonalInfo from "./AddUser";
import BusinessInformation from "./BusinessInformation";
import Document from "./Document";
import Package from "./Package";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

const AddUserContainer = () => {
  const step = ["1", "2", "3", "4"];
  const [value, setValue] = React.useState("1");
  const [activeStep, setActiveStep] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleNext = (value1) => {
  //   console.log('value1',parseInt( value1 )+1)

  //   setValue((prevActiveStep) => prevActiveStep + 1);

  // };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }} className="mt-2">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              // aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Personal Information" value="1" />
              <Tab label="Business Information" value="2" />
              <Tab label="Document" value="3" />
              <Tab label="Package" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalInfo value={setValue} />
          </TabPanel>
          <TabPanel value="2">
            <BusinessInformation value={setValue} />
          </TabPanel>
          <TabPanel value="3">
            <Document value={setValue} />
          </TabPanel>
          <TabPanel value="4">
            <Package value={setValue} />
          </TabPanel>
        </TabContext>
        {/* <React.Fragment>
          {value === "1" && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <PersonalInfo next={handleNext} />
            </Typography>
          )}
          {value === "2" && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <BusinessInformation next={handleNext} />
            </Typography>
          )}
          {value === "3" && (
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Document />
            </Typography>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={()=>handleNext(value)}>
              {activeStep === step.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment> */}
      </Box>
    </>
  );
};

export default AddUserContainer;
