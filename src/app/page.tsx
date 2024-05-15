import Todos from "@/ui/body/todos";
import NewTodo from "@/ui/todo/newTodo";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import { Suspense } from "react";

const TodosPage = async () => {
  return (
    <Paper
      component="main"
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "50dvw",
        ml: "auto",
        mr: "auto",
        my: "20px",
        p: "20px",
        gap: "20px",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>Your person Todo List</Typography>
      <NewTodo />
      <Box sx={{ width: "100%", borderBottom: "1px solid black" }} />
      <Suspense fallback={<CircularProgress />}>
        {" "}
        <Todos />
      </Suspense>
    </Paper>
  );
};
export default TodosPage;
