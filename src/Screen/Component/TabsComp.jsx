import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TabsComp = ({ tabLabel1, contetn1 }) => {
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
        </Tabs>
      </Box>
      <div role="tabpanel" hidden={value !== 0}>
        <Box sx={{ p: 3 }}>
          <Typography>{contetn1}</Typography>
        </Box>
      </div>
    </Box>
  );
};
export default TabsComp;
