import CarreiraImg from '../../assets/icons/plano-de-carreira.png';
import ProjectManagementImg from '../../assets/icons/project-management.png';
import { ExperienceSection } from './style';

interface ExperienceProps {
  projectsCount: number;
}

export function Experience({projectsCount}: ExperienceProps) {
  return(
    <ExperienceSection>
      <div>
        <div>
          <img src={CarreiraImg} alt="Ícone de Carreira" />
          <h4>Experience</h4>
          <p>+1,5 year</p>
        {/* Imagem 'carreira'; Font: <a href="https://www.flaticon.com/br/icones-gratis/carreira" title="carreira ícones">Carreira ícones criados por surang - Flaticon</a> */}
        </div>
        <div>
          <img src={ProjectManagementImg} alt="Imagem Ícone de Projetos 2" />
          <h4>Projects</h4>
          <p>+{projectsCount} Projects</p>
          {/* Imagem "project icons"; Font: <a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by dDara - Flaticon</a> */}
        </div>
      </div>
    </ExperienceSection>
  )
}
