import React, { useState, useEffect } from "react";

export const useField = (type: string) => {
  const [value, setValue] = useState<string | number>("");
  useEffect(() => {}, [value]);

  const onChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };
  return {
    type,
    value,
    onChange,
  };
};
