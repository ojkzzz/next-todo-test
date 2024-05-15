"use client";
import { Stack, TextField, Button } from "@mui/material";

const NewTodo = () => {
  const onSubmit = async (data: FormData) => {
    console.log(data.get("text"));
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <Stack flexDirection="row" gap="12px" mt="12px" component="form" action={onSubmit}>
      <TextField name="text" sx={{ flexGrow: 1 }} placeholder="Add new todo" />
      <Button variant="contained" color="success" type="submit">
        Add
      </Button>
    </Stack>
  );
};
export default NewTodo;
