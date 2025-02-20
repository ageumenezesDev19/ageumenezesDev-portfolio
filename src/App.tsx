import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme, darkTheme } from './styles/themes'
import { Header } from "./components/Header"
import { Sections } from "./components/Sections"
import { NavBar } from "./components/NavBar"
import { MyProjects } from "./components/MyProjects"
import { Links } from "./components/Links"
import { ThemeToggle } from "./components/ThemeToggle"  // importação do toggle

interface ProjectsDataProps {
  projectName: string;
  projectImg: string;
  gitRepository: string;
  demoLink?: string;
}

export function App() {
  const [projectsCount, setProjectsCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  function numberOfProjects(projects: ProjectsDataProps[]) {
    if (projectsCount === 0) {
      setProjectsCount(projects.length)
    }
  }

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
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
        background: isDark ? darkTheme.primaryColor : lightTheme.primaryColor
      }}>
        <MyProjects numberOfProjects={numberOfProjects}/>
      </div>

      <footer>
        <p>Made by Ageu Menezes Costa</p>
      </footer>
    </ThemeProvider>
  )
}
