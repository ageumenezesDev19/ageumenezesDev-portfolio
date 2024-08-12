import CarreiraImg from '../../assets/icons/plano-de-carreira.png';
import ProjectManagementImg from '../../assets/icons/project-management.png';
import { ExperienceSection } from './style';

interface ExperienceProps {
  projectsCount: number;
}

function calculateExperience() {
  const startDate = new Date(2022, 7, 1);
  const currentDate = new Date();

  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 
                    + (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const experience = years + months / 12;

  return months === 0 ? years.toString() : experience.toFixed(1);
}

export function Experience({ projectsCount }: ExperienceProps) {
  const experience = calculateExperience();

  return (
    <ExperienceSection>
      <div>
        <div>
          <img src={CarreiraImg} alt="Ícone de Carreira" />
          <h4>Experience</h4>
          <p>{experience} years</p>
        </div>
        <div>
          <img src={ProjectManagementImg} alt="Imagem Ícone de Projetos 2" />
          <h4>Projects</h4>
          <p>+{projectsCount} Projects</p>
        </div>
      </div>
    </ExperienceSection>
  );
}
