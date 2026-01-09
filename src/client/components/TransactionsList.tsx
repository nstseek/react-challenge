import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useGetTransactions } from "../queries/useGetTransactions";
import { Transaction } from "./Transaction";

export const TransactionsList = () => {
  const { data, isLoading, isFetching } = useGetTransactions();

  return (
    <Card className="p-5 flex-1 flex flex-col h-full">
      <Stack className="h-full" flexDirection="column">
        <CardHeader title="Transactions list" />

        <CardContent className="flex-1">
          <Stack
            className="flex-1"
            gap={2}
            flexDirection="column"
            justifyContent="center"
          >
            <Box className="max-h-100" overflow="auto">
              <Stack gap={1}>
                {data?.transactions.map((transaction) => (
                  <Transaction key={transaction.id} {...transaction} />
                ))}
              </Stack>
            </Box>
            <Divider />
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Typography
                sx={{ visibility: isLoading ? "hidden" : "visible" }}
                variant="caption"
              >
                {data?.transactions.length ?? 0} result(s) found - U$
                {data?.total} transacted
              </Typography>

              <CircularProgress
                sx={{ visibility: isFetching ? "visible" : "hidden" }}
                size={20}
              />
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};
