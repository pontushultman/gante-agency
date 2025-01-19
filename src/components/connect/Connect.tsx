import {
  Facebook,
  Instagram,
  Mail,
  PinDrop,
  YouTube
} from "@mui/icons-material"
import { Grid } from "@mui/material"
import Spotify from "../assets/Spotify"
import { GuiIconButton } from "../button/GuiIconButton"

export type ConnectProps = {
  facebookUrl?: string
  youtubeUrl?: string
  instagramUrl?: string
  spotifyUrl?: string
  mapUrl?: string
  mailUrl?: string
}

// Define the possible keys as a union type
type SocialLinkKey =
  | "facebookUrl"
  | "youtubeUrl"
  | "instagramUrl"
  | "spotifyUrl"
  | "mapUrl"
  | "mailUrl"

const size = "medium"

const socialLinks: { icon: React.ElementType; urlKey: SocialLinkKey }[] = [
  { icon: Facebook, urlKey: "facebookUrl" },
  { icon: YouTube, urlKey: "youtubeUrl" },
  { icon: Instagram, urlKey: "instagramUrl" },
  { icon: Spotify, urlKey: "spotifyUrl" },
  { icon: PinDrop, urlKey: "mapUrl" },
  { icon: Mail, urlKey: "mailUrl" }
]

export const Connect = ({
  facebookUrl,
  instagramUrl,
  spotifyUrl,
  youtubeUrl,
  mapUrl,
  mailUrl
}: ConnectProps) => {
  const urls: Record<SocialLinkKey, string | undefined> = {
    facebookUrl,
    youtubeUrl,
    instagramUrl,
    spotifyUrl,
    mapUrl,
    mailUrl
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
              onClick={() => {
                if (urlKey === "mailUrl") {
                  window.location.href = `mailto:${url}`
                  return
                }

                window.open(url, "_blank")
              }}
            >
              <Icon fontSize={size} />
            </GuiIconButton>
          </Grid>
        )
      })}
    </Grid>
  )
}
