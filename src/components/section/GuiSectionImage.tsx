import { Box } from "@mui/material"

type GuiSectionImageProps<T> = {
  imageUrl?: string | null
  onClick: () => void
  alt?: string
  item: T
  renderItem: (item: T) => React.ReactNode
}

export function GuiSectionImage<T>({
  imageUrl,
  onClick,
  alt,
  item,
  renderItem
}: GuiSectionImageProps<T>) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        cursor: "pointer",
        borderRadius: 2,
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 0.3
        },
        "&:hover .content": {
          color: "#f00"
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
