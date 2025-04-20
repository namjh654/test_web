// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./router/router";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
