import { useState } from "react";

/* rch */
export const useFetch = (callback) => {
  const [isLoading, setIsLoaging] = useState(false);
  const [error, setError] = useState("");

  const fetch = async (...args) => {
    try {
      setIsLoaging(true);
      await callback(...args);
    } catch (e) {
      setError(e.massage);
    } finally {
      setIsLoaging(false);
    }
  };
  return { fetch, isLoading, error };
};

