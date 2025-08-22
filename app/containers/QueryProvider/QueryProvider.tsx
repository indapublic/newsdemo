import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";
import { QueryProviderProps } from "./QueryProvider.types";

const queryClient = new QueryClient();

/**
 * Query provider.
 *
 * @param {QueryProviderProps} param0
 *
 * @returns {ReactElement<QueryProviderProps>}
 */
export function QueryProvider({ children }: QueryProviderProps): ReactElement<QueryProviderProps> {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
