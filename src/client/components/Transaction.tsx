import { Box, Card, Stack, Typography } from "@mui/material";
import type { Transaction as TransactionModel } from "../types/Transaction";

export const Transaction = ({ amount, description }: TransactionModel) => {
  return (
    <Card elevation={2} sx={{ padding: 2 }}>
      <Box sx={{ minHeight: "max-content" }}>
        <Stack gap={1} sx={{ minHeight: "max-content" }}>
          <Typography variant="body1">
            <b>Amount:</b> U${amount}
          </Typography>
          <Typography variant="body1">
            <b>Description:</b> {description}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};
