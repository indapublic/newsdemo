import { Dispatch, SetStateAction, useCallback, useMemo, useState } from "react";

/**
 *
 */
type UseBooleanReturn = {
  isFalse: boolean;
  isTrue: boolean;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

/**
 *
 */
export function useBoolean(defaultValue = false): UseBooleanReturn {
  const [value, setValue] = useState(Boolean(defaultValue));

  const setFalse = useCallback((): void => {
    setValue(false);
  }, []);

  const setTrue = useCallback((): void => {
    setValue(true);
  }, []);

  const toggle = useCallback((): void => {
    setValue(prev => !prev);
  }, []);

  return useMemo(
    (): UseBooleanReturn => ({
      isFalse: value === false,
      isTrue: value === true,
      value,
      setFalse,
      setTrue,
      setValue,
      toggle,
    }),
    [value, setFalse, setTrue, setValue, toggle],
  );
}
