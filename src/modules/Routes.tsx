import { ReactNode } from "react"
import ArtistsRoute, { artistsPath } from "./artists/ArtistsRoute"
import { eventsPath, EventsRoute } from "./events/EventsRoute"
import { homePath, HomeRoute } from "./home/HomeRoute"
import {
  ArtistDetailPage,
  artistDetailPath
} from "./artists/detail/ArtistDetailPage"
import { getInTouchPath, GetInTouchRoute } from "./get-in-touch/GetInTouchRoute"

export type UnionPath =
  | typeof homePath
  | typeof artistsPath
  | typeof eventsPath
  | typeof artistDetailPath
  | typeof getInTouchPath

export type RouteConfig = {
  path: string
  element: ReactNode
  home?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: homePath,
    element: <HomeRoute />,
    home: true
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
  },
  {
    path: getInTouchPath,
    element: <GetInTouchRoute />
  }
]
