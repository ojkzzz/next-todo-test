"use server";

import { Stack } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Stack
      component="header"
      sx={{ height: "60px", padding: "20px", bgcolor: "pink", flexDirection: "row", gap: "12px" }}
    >
      <Link href="/">Todos</Link>
      <Link href="/users">Users</Link>
    </Stack>
  );
};
export default Header;
