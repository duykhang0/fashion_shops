import { Textarea, FormControl, FormLabel, FormHelperText } from "@mui/joy";
import { Controller } from "react-hook-form";
interface ITextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  control: any;
}
const TextAreaCustom = (props: ITextAreaProps) => {
  const { label, placeholder, name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Textarea
              placeholder={placeholder}
              minRows={2}
              onChange={onChange}
            />
          </FormControl>
        );
      }}
    />
  );
};
export default TextAreaCustom;
