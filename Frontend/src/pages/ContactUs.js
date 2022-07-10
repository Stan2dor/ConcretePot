import * as React from "react";
import Box from "@mui/material/Box";
import { createSvgIcon } from "@mui/material/utils";

function ContactUs() {
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
        <HomeIcon color='primary' />
      </Box>{" "}
      <h3 style={{ size: 24 }}>I Am h3 Contact us</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </p>
    </div>
  );
}

export default ContactUs;
