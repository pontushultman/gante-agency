import { Box, Grid } from "@mui/material"
import { AnimationGrid } from "../grid/AnimationGrid"
import { motion } from "framer-motion"

type GuiSectionProps<T> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function GuiSection<T>({ items, renderItem }: GuiSectionProps<T>) {
  return (
    <Box display="flex" width="100%" sx={{ backgroundColor: "black" }}>
      <Box
        sx={{ padding: 4 }}
        width="100%"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <AnimationGrid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {renderItem(item)}
            </AnimationGrid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
