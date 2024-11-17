import { ArtistType } from "../../sanity/generated-schema-types"
import { useArtistTypesQuery } from "../../sanity/useClient"
import { AutocompleteBase } from "./AutocompleteBase"

type ArtistTypeSelectProps = {
  onChange: (value: ArtistType | null) => void
}

export const ArtistTypeSelect = ({ onChange }: ArtistTypeSelectProps) => {
  const { data } = useArtistTypesQuery()

  return (
    <AutocompleteBase
      getOptionLabel={(data) => data.artistType || ""}
      getOptionId={(data) => data._id}
      options={data || []}
      title="Type"
      onChange={onChange}
    />
  )
}
