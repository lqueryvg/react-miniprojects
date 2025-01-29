"use client";
import { useState, useEffect } from "react";

const isServer = typeof window === "undefined";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const initialize = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };

  /* prevents hydration error so that state is only initialized after server is defined */
  useEffect(() => {
    if (!isServer) {
      setStoredValue(initialize());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: React.SetStateAction<T>) => {
    const valueToStore: T =
      value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    if (!isServer) {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
    // return value;
  };
  return [storedValue, setValue] as const;
};
