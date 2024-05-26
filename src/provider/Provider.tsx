import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    )
}