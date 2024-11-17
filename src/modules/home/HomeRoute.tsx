import { FullScreenBackground } from "../../components/FullScreenBackground"
import { HomeTitle } from "./components/HomeTitle"
import { PagesSection } from "./sections/PagesSection"

export const homePath = "*"

export const HomeRoute = () => {
  return (
    <>
      <FullScreenBackground>
        <HomeTitle />
      </FullScreenBackground>
      <PagesSection />
    </>
  )
}
