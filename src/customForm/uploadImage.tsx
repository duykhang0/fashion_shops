import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Controller, set } from "react-hook-form";
import { useState } from "react";
//

interface IUploadImage {
  name: string;
  control: any;
  label: string;
}
const UploadImage = (props: IUploadImage) => {
  const { name, control, label } = props;
  const [image, setImage] = useState("");
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Please do not leave the main photo blank!",
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <>
            <Paper elevation={24}>
              <Typography>{label}</Typography>
              <Card className="flex flex-row-reverse py-2">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={value}
                  className="w-36 mx-auto"
                />

                <CardActions className="w-2/4 flex justify-center">
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const listFiles = event.target.files;
                        if (listFiles && listFiles.length > 0) {
                          const UrlImage = URL.createObjectURL(listFiles[0]);
                          onChange(UrlImage);
                          setImage(UrlImage);
                        }
                      }}
                    />
                  </Button>
                </CardActions>
              </Card>
              {error ? (
                <p className="text-xs ml-4 text-red-500 mt-1">
                  {error.message}
                </p>
              ) : (
                ""
              )}
            </Paper>
          </>
        );
      }}
    />
  );
};

export default UploadImage;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
