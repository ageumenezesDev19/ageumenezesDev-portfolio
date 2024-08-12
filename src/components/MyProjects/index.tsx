import { useEffect, useMemo } from 'react';
import toDoImg from '../../assets/projects-images/my-tasks-to-do-2.png';
import solarSystemImg from '../../assets/projects-images/project-solar-system.png';
import pixelsArtImg from '../../assets/projects-images/porject-3_pixels-art.png';
import trybeWarts2Img from '../../assets/projects-images/porject-5_trybewarts.png';
import standardImg from '../../assets/projects-images/project_code-only.jpg';
import myPortfolio from '../../assets/projects-images/my-portfolio.png';
import igniteFeedImg from '../../assets/projects-images/ignite-feed.png';
import FitFlowImg from '../../assets/projects-images/project-fitflow.png';
import DesignSystem from '../../assets/projects-images/project-design-system.png';

import { ProjectsSection, ProjectsSubtitle } from './styles';
import { ProjectComp } from '../ProjectComp';

interface Project {
  id: number;
  projectName: string;
  projectImg: string;
  gitRepository: string;
  demoLink?: string;
}

interface DataProps {
  numberOfProjects: (projects: Project[]) => void;
}

export function MyProjects({ numberOfProjects }: DataProps) {

  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      projectName: 'Design System',
      projectImg: DesignSystem,
      gitRepository: 'https://github.com/ageumenezesDev19/05-design-system',
      demoLink: 'https://ageumenezesdev19.github.io/05-design-system/'
    },
    {
      id: 2,
      projectName: 'FitFlow',
      projectImg: FitFlowImg,
      gitRepository: 'https://github.com/ageumenezesDev19/fitflow.git',
      demoLink: 'https://fitflow-taupe.vercel.app'
    },
    {
      id: 3,
      projectName: 'Ignite Feed',
      projectImg: igniteFeedImg,
      gitRepository: 'https://github.com/ageumenezesDev19/Ignite-feed.git',
      demoLink: 'https://ignite-feed-livid.vercel.app'
    },
    {
      id: 4,
      projectName: 'To-Do',
      projectImg: toDoImg,
      gitRepository: 'https://github.com/ageumenezesDev19/project-my-tasks-to-do.git',
      demoLink: 'https://endearing-hamster-35a11e.netlify.app'
    },
    {
      id: 5,
      projectName: 'Solar System',
      projectImg: solarSystemImg,
      gitRepository: 'https://github.com/ageumenezesDev19/project-solar-system',
      demoLink: 'https://project-solar-system-7s8g9uo88-ageumenezesdev19.vercel.app'
    },
    {
      id: 6,
      projectName: 'Pixels Art',
      projectImg: pixelsArtImg,
      gitRepository: 'https://github.com/ageumenezesDev19/project-trybewarts-2/tree/main',
      demoLink: 'https://project-pixels-art-alpha.vercel.app'
    },
    {
      id: 7,
      projectName: 'My Portfolio',
      projectImg: myPortfolio,
      gitRepository: 'https://github.com/ageumenezesDev19/ageumenezesDev19P2.github.io-.git',
    },
    {
      id: 8,
      projectName: 'Trybewarts 2',
      projectImg: trybeWarts2Img,
      gitRepository: 'https://github.com/ageumenezesDev19/project-trybewarts-2/tree/main',
      demoLink: 'https://project-trybewarts-2.vercel.app'
    },
    {
      id: 9,
      projectName: 'Playground Functions',
      projectImg: standardImg,
      gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-04_Intruducão-a-javaScript-e-lógica-de-programacão/dia-5_projeto_playground-functions',
    },
    {
      id: 10,
      projectName: 'Unit Tests',
      projectImg: standardImg,
      gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-07-introducao-a-javascript-es6-e-testes-unitarios/dia-4_projeto_javaScript-testes-unitários',
    },
    {
      id: 11,
      projectName: 'Zoo Functions',
      projectImg: standardImg,
      gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-08-higher-order-functions-do-javascript-es6/dia-6_projeto_zoo-functions',
    }
  ], []);

  useEffect(() => {
    numberOfProjects(projects);
  }, [projects, numberOfProjects]);

  return (
    <>
      <ProjectsSubtitle>
        <div>
          <h2>My Projects</h2>
        </div>
      </ProjectsSubtitle>
      <ProjectsSection>
        {projects.map(({ id, projectName, projectImg, gitRepository, demoLink }) => (
          <ProjectComp
            key={id}
            projectName={projectName}
            projectImg={projectImg}
            gitRepository={gitRepository}
            demoLink={demoLink}
          />
        ))}
      </ProjectsSection>
    </>
  );
}
