"use client"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const Provider = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default Provider;