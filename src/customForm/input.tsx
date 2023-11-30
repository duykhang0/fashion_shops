import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
interface IInputProps {
  name: string;
  label: string;
  control: any;
  placeholder?: string;
  rules?: {};
}
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
            />
            {error ? (
              <p className="text-red-500 text-sm ml-3">{error.message}</p>
            ) : (
              ""
            )}
          </>
        );
      }}
    />
  );
};

export default CustomInput;
