import { Category } from "@/features/news/types";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type UseSearchParams = {
  category: Category | undefined;
  debouncedQuery: string;
  query: string;
  setCategory: (v: Category | undefined) => void;
  setQuery: (v: string) => void;
  updateDebounced: (v: string) => void;
};

/**
 * Hook to manage search params.
 *
 * @returns {UseSearchParams}
 */
export function useSearchParams(): UseSearchParams {
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const updateDebounced = useDebouncedCallback((v: string) => setDebouncedQuery(v), 300);

  return {
    category,
    debouncedQuery,
    query,
    setCategory,
    setQuery,
    updateDebounced,
  };
}
