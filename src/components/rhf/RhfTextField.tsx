import { FieldValues, useController } from "react-hook-form"
import { RhfBase } from "./types"
import { TextField, TextFieldProps } from "@mui/material"



export type RhfTextFieldProps<T extends FieldValues> = RhfBase<T> & TextFieldProps

export const RhfTextField = (props: RhfTextFieldProps<FieldValues>) => {
    const {field, fieldState} = useController({
        name: props.field
    })

    return (
        <TextField
            {...props}
            {...field}
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
        />
    )

}