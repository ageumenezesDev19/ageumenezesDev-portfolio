import { SoftSkillsSection } from "./styles";
import CarreiraImg from '../../assets/icons/plano-de-carreira.png'
import ProjectManagementImg from '../../assets/icons/project-management.png'

export function MySoftSkills() {
  return(
    <SoftSkillsSection>
      <h2>My Soft Skills</h2>
      <ul>
      {/*<hr>, font: http://www.fundacaobradesco.org.br/vv-apostilas/cursoHTML/Linhas_horizontais.html */}
        <li>Communication;</li>
        <li>Teamwork;</li>
        <li>Emotional intelligence;</li>
        <li>Financial Intelligence;</li>
        <li>Creativity;</li>
        <li>Adaptability.</li>
      </ul>
      <div>
        <div>
          <img src={CarreiraImg} alt="Ícone de Carreira" />
          <h4>Experience</h4>
          <p>+1 year</p>
        {/* Imagem 'carreira'; Font: <a href="https://www.flaticon.com/br/icones-gratis/carreira" title="carreira ícones">Carreira ícones criados por surang - Flaticon</a> */}
        </div>
          <div>
            <img src={ProjectManagementImg} alt="Imagem Ícone de Projetos 2" />
            <h4>Projects</h4>
            <p>10 Projects</p>
        {/* Imagem "project icons"; Font: <a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by dDara - Flaticon</a> */}
            </div>
        </div>
    </SoftSkillsSection>
  )  
}
