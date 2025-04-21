// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./router/router";
import { errorHandler } from "./utils/handleError";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      // throwOnError: true,
    },
    mutations: {
      onError: (error, setError) => errorHandler(error, setError),
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
