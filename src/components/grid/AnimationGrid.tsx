import Grid from "@mui/material/Grid"
import { motion } from "framer-motion"

export const AnimationGrid = (props: any) => {
  return (
    <Grid
      {...props}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
    >
      {props.children}
    </Grid>
  )
}
