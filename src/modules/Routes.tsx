import { ReactNode } from "react"
import ArtistsRoute, { artistsPath } from "./artists/ArtistsRoute"
import {
  ArtistDetailPage,
  artistDetailPath
} from "./artists/detail/ArtistDetailPage"
import {
  eventPackagesPath,
  EventPackagesRoute
} from "./event-packages/EventPackagesRoute"
import { eventsPath, EventsRoute } from "./events/EventsRoute"
import { getInTouchPath, GetInTouchRoute } from "./get-in-touch/GetInTouchRoute"
import { homePath, HomeRoute } from "./home/HomeRoute"

export type UnionPath =
  | typeof homePath
  | typeof artistsPath
  | typeof eventsPath
  | typeof artistDetailPath
  | typeof getInTouchPath
  | typeof eventPackagesPath

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
  },
  {
    path: eventPackagesPath,
    element: <EventPackagesRoute />
  }
]
