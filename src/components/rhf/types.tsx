import { FieldValues, Path } from "react-hook-form";

export type RhfBase<T extends FieldValues> = {
    field: Path<T>
}