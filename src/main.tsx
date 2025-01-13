import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "@/components/ui/provider";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={system}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
