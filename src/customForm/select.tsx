import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { ICustomSelect } from "./types";

const CustomSelect = (props: ICustomSelect) => {
  const { datas, label, placeholder, control, name, rules } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            multiple
            options={datas}
            freeSolo
            value={value || []}
            onChange={(event, newValue) => onChange(newValue)}
            getOptionLabel={(option) => option.name_category}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  label={label}
                  placeholder={placeholder}
                  helperText={error ? error.message : null}
                  error={!!error}
                />
              </>
            )}
          />
        );
      }}
    />
  );
};
export default CustomSelect;
