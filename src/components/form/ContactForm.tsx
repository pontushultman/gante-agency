import { Box, Drawer, Grid, Typography } from "@mui/material"
import { FieldValues, FormProvider, useForm } from "react-hook-form"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { GuiButton } from "../button/GuiButton"
import { RhfTextField, RhfTextFieldProps } from "../rhf/RhfTextField"

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().nonempty(),
  phone: z.string().optional(),
  company: z.string().optional()
})

export function FormRhfTextField<T extends FieldValues>(
  props: RhfTextFieldProps<T>
) {
  return (
    <RhfTextField
      {...props}
      fullWidth
      variant="filled"
      size="medium"
      sx={{
        borderColor: "white",
        backgroundColor: "white",
        color: "white",
        "&:hover": {
          borderColor: "white"
        }
      }}
    />
  )
}

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Box padding={4}>
      <Typography variant="h4" sx={{ color: "white", pb: 2 }}>
        Contact us
      </Typography>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormProvider {...form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormRhfTextField required label="Name" field="name" />
            </Grid>
            <Grid item xs={12}>
              <FormRhfTextField required label="Email" field="email" />
            </Grid>
            <Grid item xs={12}>
              <FormRhfTextField label="Telephone" field="phone" />
            </Grid>
            <Grid item xs={12}>
              <FormRhfTextField label="Company" field="company" />
            </Grid>
            <Grid item xs={12}>
              <FormRhfTextField
                required
                multiline
                rows={4}
                label="Message"
                field="message"
              />
            </Grid>
          </Grid>
        </FormProvider>

        <GuiButton
          sx={{
            mt: 2,
            width: "100%"
          }}
        >
          Send
        </GuiButton>
      </form>
    </Box>
  )
}

type ContactFormDrawerProps = {
  onClose: () => void
  open: boolean
}

export const ContactFormDrawer = ({
  onClose,
  open
}: ContactFormDrawerProps) => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "400px"
        }
      }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          height: "100%",
          backgroundColor: "black"
        }}
      >
        <ContactForm />
      </Box>
    </Drawer>
  )
}
