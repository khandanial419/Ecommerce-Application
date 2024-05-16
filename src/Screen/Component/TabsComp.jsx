import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TabsComp = ({
  tabLabel1,
  tabLabe2,
  tabLabel3,
  tabLabel4,
  contetn1,
  contetn2,
  contetn3,
  contetn4,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", textAlign: "center" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Tab label={tabLabel1} />
          <Tab label={tabLabe2} />
          <Tab label={tabLabel3} />
          <Tab label={tabLabel4} />
        </Tabs>
      </Box>
      <div role="tabpanel" hidden={value !== 0}>
        <Box sx={{ p: 3 }}>
          <Typography>{contetn1}</Typography>
        </Box>
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        <Box sx={{ p: 3 }}>
          <Typography>{contetn2}</Typography>
        </Box>
      </div>

      <div role="tabpanel" hidden={value !== 2}>
        <Box sx={{ p: 3 }}>
          <Typography>{contetn3}</Typography>
        </Box>
      </div>
      <div role="tabpanel" hidden={value !== 3}>
        <Box sx={{ p: 3 }}>
          <Typography>{contetn4}</Typography>
        </Box>
      </div>
    </Box>
  );
};
export default TabsComp;
