"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

const AuthProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default AuthProvider;
