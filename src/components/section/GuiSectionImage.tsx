import { Box, SxProps, Theme } from "@mui/material"

type GuiSectionImageProps<T> = {
  imageUrl?: string | null
  onClick?: () => void
  alt?: string
  item: T
  renderItem: (item: T) => React.ReactNode
  sx?: SxProps<Theme>
}

export function GuiSectionImage<T>({
  imageUrl,
  onClick,
  alt,
  item,
  renderItem,
  sx
}: GuiSectionImageProps<T>) {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...sx,
        position: "relative",
        cursor: "pointer",
        borderRadius: 2,
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: onClick ? 0.3 : undefined
        },
        "&:hover .content": {
          color: onClick ? "#f00" : undefined
        }
      }}
    >
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={alt || "image"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      )}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}
      />
      {renderItem(item)}
    </Box>
  )
}
