import { Box, Grid } from "@mui/material"
import { urlFor } from "../../sanity/image"
import { ArtistModel } from "../../sanity/sanityClient"
import { RotatingTypography } from "../typography/RotatingTypography"
import { AnimationGrid } from "../grid/AnimationGrid"

type DetailPageImageSlideShowProps = {
  images: ArtistModel["imageGallery"]
}

export const DetailPageImageSlideShow = ({
  images
}: DetailPageImageSlideShowProps) => {
  if (images?.length === 0) return null

  return (
    <Box
      sx={{ backgroundColor: "black" }}
      display="flex"
      justifyContent="flex-end"
      flexDirection="column"
      paddingX={2}
    >
      <RotatingTypography paddingY={8} variant="h3" marginLeft="70%">
        Images
      </RotatingTypography>

      <Grid container spacing={2}>
        {images?.map((image, index) => (
          <AnimationGrid item xs={12} sm={6} md={4} lg={3} key={index}>
            <img src={urlFor(image).url()} alt="" style={{ width: "100%" }} />
          </AnimationGrid>
        ))}
      </Grid>
    </Box>
  )
}
