import { Profile } from "./components/Profile"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
// import { TopBar } from "./components/TopBar"

export const PortfolioApp = () => {
  return (
    <div className="container">
      {/* <TopBar/> */}
      <div className="title-box">
        <h1 className="title">Teo Corona</h1>
        <h2 className="legend">Web Developer<span className="blink">|</span></h2>
      </div>
      <Profile/>
      <Skills />
      <Projects />
      <p className="text-end"><i>Last updated June 2022</i></p>
    </div>
  )
}
