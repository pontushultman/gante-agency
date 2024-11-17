import { Grid2 } from "@mui/material"

type GalleryProps = {
  images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <Grid2 container>
      {images.map((image, index) => (
        <Grid2 component="div" key={index}>
          <img src={image} alt={`Gallery ${index}`} />
        </Grid2>
      ))}
    </Grid2>
  )
}
