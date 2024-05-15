import { apiEnum } from "@/constants/api.enum";
import { fetchApi } from "@/lib/api";
import { UserType } from "@/lib/api-types";
import { DeleteButton } from "@/ui/button";
import {
  Stack,
  TextField,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Users = async () => {
  const data = await fetchApi<UserType[]>(apiEnum.users);
  return (
    <Stack sx={{ padding: "20px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{user.name}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.address.city}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.website}</TableCell>
                <TableCell align="right">{user.company.name}</TableCell>
                <TableCell align="right">
                  <Stack flexDirection="row" gap="12px">
                    <Button variant="contained" color="success" type="submit">
                      Add
                    </Button>
                    <DeleteButton id={user.id} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Users;
