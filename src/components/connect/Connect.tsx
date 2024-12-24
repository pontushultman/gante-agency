import { Facebook, Instagram, Map, YouTube } from "@mui/icons-material"
import { Grid } from "@mui/material"
import { GuiIconButton } from "../button/GuiIconButton"
import Spotify from "../assets/Spotify"

export type ConnectProps = {
  facebookUrl?: string
  youtubeUrl?: string
  instagramUrl?: string
  spotifyUrl?: string
  mapUrl?: string
}

// Define the possible keys as a union type
type SocialLinkKey =
  | "facebookUrl"
  | "youtubeUrl"
  | "instagramUrl"
  | "spotifyUrl"
  | "mapUrl"

const size = "small"

const socialLinks: { icon: React.ElementType; urlKey: SocialLinkKey }[] = [
  { icon: Facebook, urlKey: "facebookUrl" },
  { icon: YouTube, urlKey: "youtubeUrl" },
  { icon: Instagram, urlKey: "instagramUrl" },
  { icon: Spotify, urlKey: "spotifyUrl" },
  { icon: Map, urlKey: "mapUrl" }
]

export const Connect = ({
  facebookUrl,
  instagramUrl,
  spotifyUrl,
  youtubeUrl,
  mapUrl
}: ConnectProps) => {
  const urls: Record<SocialLinkKey, string | undefined> = {
    facebookUrl,
    youtubeUrl,
    instagramUrl,
    spotifyUrl,
    mapUrl
  }

  return (
    <Grid container spacing={1}>
      {socialLinks.map(({ icon: Icon, urlKey }) => {
        const url = urls[urlKey]
        if (!url) return null

        return (
          <Grid item key={urlKey}>
            <GuiIconButton
              size={size}
              onClick={() => window.open(url, "_blank")}
            >
              <Icon fontSize={size} />
            </GuiIconButton>
          </Grid>
        )
      })}
    </Grid>
  )
}
