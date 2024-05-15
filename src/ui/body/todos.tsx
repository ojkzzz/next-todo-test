import { apiEnum } from "@/constants/api.enum";
import { fetchApi } from "@/lib/api";
import { TodoType } from "@/lib/api-types";
import { Button, Stack, TextField } from "@mui/material";

const Todos = async () => {
  const data = await fetchApi<TodoType[]>(`${apiEnum.todos}`);
  const rangeStart = 0;
  const rangeEnd = 15;
  if (!data.length) return null;
  return (
    <Stack>
      {data.slice(rangeStart, rangeEnd).map((el) => (
        <Stack flexDirection="row" gap="12px" mt="12px" key={el.id}>
          <TextField sx={{ flexGrow: 1 }} defaultValue={el.title} />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
          <Button variant="contained" color="error">
            Remove
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};
export default Todos;
