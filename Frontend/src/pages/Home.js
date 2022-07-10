import * as React from "react";
import Box from "@mui/material/Box";
import { createSvgIcon } from "@mui/material/utils";

function Homepage() {
  const HomeIcon = createSvgIcon(
    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />,
    "Home"
  );

  return (
    <div>
      <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}>
        <HomeIcon />
        <HomeIcon color='primary' />
      </Box>{" "}
      <h2 style={{ size: 24 }}>I Am h2 Home</h2>
    </div>
  );
}

export default Homepage;
