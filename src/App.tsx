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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--background-7)'
      }}>
        <MyProjects numberOfProjects={numberOfProjects}/>
      </div>

      <footer>
        <p>Made by Ageu Menezes Costa</p>
      </footer>
    </>
  )
}
