import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import { useCreateTransaction } from "../queries/useCreateTransaction";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type { Transaction } from "../types/Transaction";

const formSchema = z.object({
  amount: z.coerce.number().gt(0, "You must insert a positive amount"),
  description: z.string().min(3, "Description must be at least 3 characters"),
});

export const TransactionsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      description: "",
    },
  });

  const { mutate, isPending } = useCreateTransaction({
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (value: Transaction) => {
    mutate(value);
  };

  return (
    <Card className="p-5 flex-1">
      <CardHeader title="Transaction form" />
      <CardContent>
        <Stack justifyContent="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack justifyContent="center" alignItems="center" gap={2}>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    label="Amount"
                    error={!!errors.amount}
                    helperText={errors.amount?.message as string}
                    fullWidth
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    error={!!errors.description}
                    helperText={errors.description?.message}
                    fullWidth
                  />
                )}
              />
              <Button type="submit" loading={isPending} variant="contained">
                Save transaction
              </Button>
            </Stack>
          </form>
        </Stack>
      </CardContent>
    </Card>
  );
};
