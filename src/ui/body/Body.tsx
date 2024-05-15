// "use client";

import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import Todos from "./todos";

const Body = async () => {
  return (
    <Paper
      component="main"
      elevation={4}
      sx={{ minWidth: "50dvw", ml: "auto", mr: "auto", my: "20px", p: "20px" }}
    >
      <Typography sx={{ textAlign: "center" }}>Your person Todo List</Typography>
      <Stack flexDirection="row" gap="12px" mt="12px">
        <TextField sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </Stack>
      <Todos />
    </Paper>
  );
};
export default Body;
