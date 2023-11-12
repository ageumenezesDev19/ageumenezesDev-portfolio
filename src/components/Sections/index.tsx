import { AboutMe } from "../AboutMe";
import { MainImg } from "../MainImg";
import { MyLinks } from "../MyLinks";
import { MySoftSkills } from "../MySoftSkills";
import { MyHardSkills } from "../MyHardSkills";
import { SectionsStyle } from "./styles";

export function Sections() {
  return(
    <SectionsStyle>
      <section>
        <MainImg />
        <AboutMe />
      </section>
      <section>
        <MyLinks />
        <MySoftSkills />
        <MyHardSkills />
      </section>
    </SectionsStyle>
  )
}
