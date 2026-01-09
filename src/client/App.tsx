import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "@mui/material";
import { Form } from "./components/Form";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack gap={2} sx={{ width: "max-content", margin: "auto" }}>
        <Form />
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
