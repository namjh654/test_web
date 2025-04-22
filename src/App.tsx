// src/App.tsx
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./router/router";
import { errorHandler } from "./utils/handleError";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";



const App = () => {

  // const navigate = useNavigate();
  
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
    queryCache: new QueryCache({
      onError: (error, setError) => {
        if (isAxiosError(error)) {
          // if (error.response?.data.status === 404) {
          //   navigate('/*', {
          //     state: {
          //       title: 'notFoundTitle',
          //       subTitle: 'notFoundSubTitle',
          //     },
          //   });
          // } else if (error.code === 'ERR_NETWORK') {
          //   navigate('/*', {
          //     state: {
          //       title: 'ErrNetworkTitle',
          //       subTitle: 'ErrNetworkSubTitle',
          //     },
          //   });
          // } else 
          {
            errorHandler(error, setError);
          }
        }
      },
    }),
  });


  return (
    <QueryClientProvider client={client}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
