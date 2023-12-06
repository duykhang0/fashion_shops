import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { IInputProps } from "./types";

const CustomInput = (props: IInputProps) => {
  const { name, label, control, placeholder, rules } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules ? rules : {}}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <TextField
              label={label}
              variant="outlined"
              placeholder={placeholder}
              className="w-full mt-3"
              onChange={onChange}
              value={value}
              helperText={error ? error.message : null}
              error={!!error}
            />
          </>
        );
      }}
    />
  );
};

export default CustomInput;
