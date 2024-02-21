import React, { FunctionComponent } from "react";
import { useController, useFormContext } from "react-hook-form";

import { Input } from "./input";
import { ControlledInputProps } from "./types";

export const ControlledInput: FunctionComponent<ControlledInputProps> = (
  props
) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur },
  } = useController({ control, name: props.name, defaultValue: "" });

  return (
    <Input value={value} onChangeText={onChange} onBlur={onBlur} {...props} />
  );
};
