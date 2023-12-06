import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Controller } from "react-hook-form";
interface IInputCurrency {
  name: string;
  control: any;
  label: string;
}
// const rules = ;
const InputCurrency = (props: IInputCurrency) => {
  const { label, control, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "Price does not empty !",
        pattern: {
          value: /^[0-9]*\.?[0-9]*$/,
          message: "Please enter a valid numeric value for the price !",
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label={label}
              onChange={onChange}
              error={!!error}
            />
            {error ? (
              <span className="text-red-500 text-xs mt-1 ml-4">
                {error.message}
              </span>
            ) : (
              ""
            )}
          </FormControl>
        );
      }}
    />
  );
};
export default InputCurrency;
