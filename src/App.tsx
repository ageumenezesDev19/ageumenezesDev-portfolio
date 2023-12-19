import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { NavBar } from "./components/NavBar";
import { MyProjects } from "./components/MyProjects";
import { GlobalStyle } from "./styles/global";
import { Links } from "./components/Links";
import { useState } from "react";

interface ProjectsDataProps {
  projectName: string;
  projectImg: string;
  gitRepository: string;
  demoLink?: string;
}

export function App() {

const [projectsCount, setProjectsCount] = useState(0);
function numberOfProjects(projects: ProjectsDataProps[]) {
  if (projectsCount === 0) {
    setProjectsCount(projectsCount + projects.length);
  }
}

  return (
    <>
      <GlobalStyle />
      <Links link='home-link'/>
      <Header />
      <Sections projectsCount={projectsCount} />
      <NavBar/>
      <Links link='my-projects-link'/>
      <MyProjects numberOfProjects={numberOfProjects}/>

      <footer>
        <p>Made by Ageu Menezes Costa</p>
      </footer>
    </>
  )
}
