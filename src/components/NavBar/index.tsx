import { NavStyles } from "./styles";
import homeImg from "../../assets/navBar/homeflat_106039.svg";
import aboutImg from "../../assets/navBar/directory_call_telephone_phone_contacts_communication_contact_book_address_icon_210815.svg"
import projectsImg from "../../assets/navBar/developer_folder_20798.png";

export function NavBar() {
  return(
    <NavStyles>
      <ul>
        <a href="#home-link">
          <li>
            <img src={homeImg} alt="Ícone Home" />
          </li>
        </a>
        <a href="#about-me-link">
          <li>
            <img src={aboutImg} alt="Ícone About" />
          </li>
        </a>
        <a href="#my-projects-link">
          <li>
            <img src={projectsImg} alt="Ícone Projects" />
          </li>
        </a>
      </ul>
    </NavStyles>
  )
}
