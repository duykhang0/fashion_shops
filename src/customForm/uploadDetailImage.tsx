import {
  Button,
  Card,
  CardActions,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import { useState } from "react";
//

//
interface IUploadDetailImage {
  name: string;
  control: any;
  label?: string;
}
const UploadDetailImage = (props: IUploadDetailImage) => {
  const { name, control } = props;
  const [listImage, setListImage] = useState<string[]>([]);

  // handle detele image

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <Typography>Upload Detail Image</Typography>
            <Card>
              <ImageList
                sx={{
                  width: "100%",
                  // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                  transform: "translateZ(0)",
                }}
                gap={1}
                cols={3}
              >
                {value.map((item: string, index: number) => {
                  return (
                    <ImageListItem key={"item" + index}>
                      <img src={item} loading="lazy" />
                      <ImageListItemBar
                        position="top"
                        actionIcon={
                          <IconButton
                            sx={{ color: "white" }}
                            onClick={() => {
                              const listImageClone = [...listImage];
                              listImageClone.splice(index, 1);
                              setListImage(listImageClone);
                              onChange(listImageClone);
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        }
                        actionPosition="right"
                      />
                    </ImageListItem>
                  );
                })}
              </ImageList>

              <CardActions>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  className="mx-auto"
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(event) => {
                      const listFiles = event.target.files;
                      if (listFiles && listFiles.length > 0) {
                        const newListImage = [...listImage];
                        for (let i = 0; i < listFiles.length; i++) {
                          newListImage.push(URL.createObjectURL(listFiles[i]));
                        }
                        setListImage(newListImage);
                        onChange(newListImage);
                      }
                    }}
                  />
                </Button>
              </CardActions>
            </Card>
          </>
        );
      }}
    />
  );
};
export default UploadDetailImage;
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
