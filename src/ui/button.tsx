"use client";

import { Button } from "@mui/material";
import { FC } from "react";

interface Props {
  id: number;
}

export const DeleteButton: FC<Props> = ({ id }) => {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => {
        console.log(id);
      }}
    >
      Remove
    </Button>
  );
};
