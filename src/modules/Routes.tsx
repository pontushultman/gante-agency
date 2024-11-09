import { ReactNode } from "react"
import ArtistsRoute, { artistsPath } from "./artists/ArtistsRoute"
import { eventsPath, EventsRoute } from "./events/EventsRoute"
import { homePath, HomeRoute } from "./home/HomeRoute"

export type UnionPath = typeof homePath | typeof artistsPath | typeof eventsPath

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
  }
]
