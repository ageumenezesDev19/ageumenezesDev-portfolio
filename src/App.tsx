import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { NavBar } from "./components/NavBar";
import { MyProjects } from "./components/MyProjects";
import { GlobalStyle } from "./styles/global";
import { Links } from "./components/Links";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Links link='home-link'/>
      <Header />
      <Sections />
      <NavBar/>
      <Links link='my-projects-link'/>
      <MyProjects />

      <footer>
        <p>Made by Ageu Menezes Costa</p>
      </footer>
    </>
  )
}
