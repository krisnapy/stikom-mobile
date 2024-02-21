import { DripsyTextInputProps } from "dripsy/build/core/components/TextInput";

export type InputProps = DripsyTextInputProps & {
  label?: string;
};

export type ControlledInputProps = Partial<InputProps> & {
  name: string;
};
