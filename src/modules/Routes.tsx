import { ReactNode } from "react"
import ArtistsRoute, { artistsPath } from "./artists/ArtistsRoute"
import { eventsPath, EventsRoute } from "./events/EventsRoute"
import { homePath, HomeRoute } from "./home/HomeRoute"
import {
  ArtistDetailPage,
  artistDetailPath
} from "./artists/detail/ArtistDetailPage"

export type UnionPath =
  | typeof homePath
  | typeof artistsPath
  | typeof eventsPath
  | typeof artistDetailPath

export type RouteConfig = {
  path: string
  element: ReactNode
}

export const routes: RouteConfig[] = [
  {
    path: homePath,
    element: <HomeRoute />
  },
  {
    path: artistsPath,
    element: <ArtistsRoute />
  },
  {
    path: eventsPath,
    element: <EventsRoute />
  },
  {
    path: artistDetailPath,
    element: <ArtistDetailPage />
  }
]
