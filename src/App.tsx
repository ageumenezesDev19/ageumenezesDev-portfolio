import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { MyLinks } from "./components/MyLinks";
import { NavBar } from "./components/NavBar";
import { MyProjects } from "./components/MyProjects";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <NavBar/>
      <MyLinks />
      <MyProjects />
    </>
  )
}
