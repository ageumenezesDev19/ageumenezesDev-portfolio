import { AboutMe } from "../AboutMe";
import { MainImg } from "../MainImg";
import { MyLinks } from "../MyLinks";
import { MySoftSkills } from "../MySoftSkills";
import { MyHardSkills } from "../MyHardSkills";
import { SectionsStyle } from "./styles";
import { Links } from "../Links";

export function Sections() {
  return(
    <SectionsStyle>
      <section>
        <MainImg />
        <AboutMe />
      </section>
      <section>
        <Links link='about-me-link'/>
        <MyLinks />
        <MySoftSkills />
        <MyHardSkills />
      </section>
    </SectionsStyle>
  )
}
