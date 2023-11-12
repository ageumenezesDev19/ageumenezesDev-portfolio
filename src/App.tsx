import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { NavBar } from "./components/NavBar";
import { MyProjects } from "./components/MyProjects";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavBar/>
      <Sections />
      <MyProjects />
    </>
  )
}
