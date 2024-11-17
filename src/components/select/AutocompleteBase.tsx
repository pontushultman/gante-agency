import { Autocomplete, styled, TextField } from "@mui/material"

type AutocompleteBaseProps<T> = {
  options: T[]
  title: string
  getOptionLabel: (option: T) => string
  getOptionId: (option: T) => string
  onChange?: (value: T | null) => void
}

const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "20px", // Rounded corners
    border: "2px solid white", // White border
    padding: "4px 16px", // Adjust padding as needed
    fontWeight: "bold",
    variant: "filled",
    backgroundColor: "black",
    "& .MuiFormLabel-root": {
      color: "white"
    },
    "&:hover": {
      borderColor: "red", // Reddish border on hover
      backgroundColor: "red" // Keep the black background on hover
    }
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none" // Remove default border
  }
}))

export function AutocompleteBase<T>({
  options,
  title,
  getOptionLabel,
  getOptionId,
  onChange
}: AutocompleteBaseProps<T>) {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionKey={getOptionId}
      renderInput={(params) => <StyledTextField {...params} label={title} />}
      onChange={(_, value) => {
        onChange?.(value)
      }}
    />
  )
}
