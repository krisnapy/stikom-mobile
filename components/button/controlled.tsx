import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "./button";
import { ControlledButtonProps } from "./types";

export const ControlledButton: FunctionComponent<ControlledButtonProps> = (
  props
) => {
  const { handleSubmit } = useFormContext();
  return <Button {...props} onPress={handleSubmit(props.onPress)} />;
};
