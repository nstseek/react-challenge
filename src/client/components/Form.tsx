import { Button, Card, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateTransaction } from "../queries/useCreateTransaction";

export const Form = () => {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
  });

  const { mutate, isPending } = useCreateTransaction();

  return (
    <Card sx={{ padding: 5 }}>
      <form
        onChange={({ target }) => {
          // @ts-ignore - will fix it later
          setForm({ ...form, [target.name]: target.value });
        }}
        onSubmit={() => {
          mutate(form);
        }}
      >
        <Stack justifyContent="center" alignItems="center" gap={2}>
          <TextField
            name="amount"
            type="number"
            label="Transaction amount"
            value={form.amount}
          />
          <TextField
            name="description"
            type="text"
            label="Transaction description"
            value={form.description}
          />
          <Button loading={isPending} variant="contained">
            Send
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
