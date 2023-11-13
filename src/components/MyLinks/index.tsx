import { LinksSection } from "./styles";
import LinkedInImg from '../../assets/icons/linkedin.png';
import GithubImg from '../../assets/icons/iconmonstr-github-1.svg';
import EmailImg from '../../assets/icons/4202011emailgmaillogomailsocialsocialmedia-115677_115624.svg';
import WhatsAppImg from '../../assets/icons/iconfinder-social-media-applications-23whatsapp-4102606_113811.svg';
import CatalineImg from '../../assets/icons/cataline.svg';
import TelegramImg from '../../assets/icons/telegram_icon_130816.svg';

export function MyLinks() {
  return(
    <LinksSection>
      <h3>My Links</h3>
        <ul id="contacts-links">
          <li>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInImg} alt="Ícone do LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ageumenezesDev19" target="_blank" rel="noopener noreferrer">
              <img src={GithubImg} alt="Ícone do GitHub" />
            </a>
          </li>
          <li>
            <a href="mailto:ageumenezes23@gmail.com">
              <img src={EmailImg} alt="Ícone do Gmail" />
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/send?phone=5588981774397" target="_blank" rel="noopener noreferrer">
              <img src={WhatsAppImg} alt="Ícone do WhatsApp" />
            </a>
          </li>
          <li>
            <a href="https://go.hotmart.com/O61634593X" target="_blank" rel="noopener noreferrer">
              <img src={CatalineImg} alt="Ícone da Cataline" />
            </a>
          </li>
          <li>
            <a href="https://t.me/ageu_menezes" target="_blank" rel="noopener noreferrer">
              <img src={TelegramImg} alt="Ícone do Telegram" />
            </a>
          </li>
        </ul>
    </LinksSection>
  )
}
