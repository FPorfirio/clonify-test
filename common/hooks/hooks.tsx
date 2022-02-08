import React, { useState, useEffect, useRef } from "react";

export const useField = (type: string) => {
  const [value, setValue] = useState<string | number>("");
  useEffect(() => {}, [value]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  return {
    type,
    value,
    onChange,
  };
};

export const useEditable = () => {
  const [editableProps, setEditableProps] = useState({
    contentEditable: false,
    suppressContentEditableWarning: false,
  });
  const [editableValue, setEditableValue] = useState("");
  const isEditable = editableProps.contentEditable;
  const editableRef = useRef<HTMLParagraphElement>(null);

  const onInput = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setEditableValue(e.target.textContent!);
  };
  console.log(editableProps, editableRef);

  useEffect(() => {
    editableRef.current?.focus();
  }, [editableRef, editableProps]);

  const makeEditable = (editable: boolean) => {
    if (editable) {
      console.log("seee");
      setEditableProps({
        contentEditable: true,
        suppressContentEditableWarning: true,
      });
      return;
    }
    setEditableProps({
      contentEditable: false,
      suppressContentEditableWarning: false,
    });
  };

  return {
    onInput,
    makeEditable,
    editableProps,
    editableValue,
    isEditable,
    editableRef,
  };
};
