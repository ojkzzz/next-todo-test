"use client";

import { Button } from "@mui/material";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  console.log("error =", error);
  return (
    <div>
      <h2>Что-то пошло не так...</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        One more time
      </Button>
    </div>
  );
};
export default Error;
