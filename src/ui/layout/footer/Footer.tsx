"use server";

import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack component="footer" sx={{ height: "60px", padding: "20px", bgcolor: "pink" }}>
      <p>footer</p>
    </Stack>
  );
};
export default Footer;
