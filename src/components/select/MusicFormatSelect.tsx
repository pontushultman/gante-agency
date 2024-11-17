import { MusicFormat } from "../../sanity/generated-schema-types"
import { useMusicFormatsQuery } from "../../sanity/useClient"
import { AutocompleteBase } from "./AutocompleteBase"

type MusicFormatSelectProps = {
  onChange?: (value: MusicFormat | null) => void
}

export const MusicFormatSelect = ({ onChange }: MusicFormatSelectProps) => {
  const { data } = useMusicFormatsQuery()

  return (
    <AutocompleteBase
      getOptionId={(data) => data._id}
      getOptionLabel={(data) => data.musicFormat || ""}
      options={data || []}
      title="Format"
      onChange={onChange}
    />
  )
}
