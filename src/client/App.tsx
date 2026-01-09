import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box, Container, CssBaseline, Stack, Typography } from "@mui/material";
import { TransactionsForm } from "./components/TransactionsForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TransactionsList } from "./components/TransactionsList";

const queryClient = new QueryClient();

const theme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack className="bg-black p-1" alignItems="center">
          <Typography variant="h6" textTransform="uppercase">
            Transactions Challenge
          </Typography>
        </Stack>
        <Container id="app">
          <Stack direction="row" justifyContent="center" gap={2}>
            <TransactionsForm />
            <TransactionsList />
          </Stack>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
