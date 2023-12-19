import toDoImg from '../../assets/projects-images/my-tasks-to-do-2.png';
import solarSystemImg from '../../assets/projects-images/project-solar-system.png';
import pixelsArtImg from '../../assets/projects-images/porject-3_pixels-art.png';
import trybeWarts2Img from '../../assets/projects-images/porject-5_trybewarts.png';
import standardImg from '../../assets/projects-images/project_code-only.jpg';
import myPortfolio from '../../assets/projects-images/my-portifolio.png';
import igniteFeedImg from '../../assets/projects-images/ignite-feed.png';

import { ProjectsSection, ProjectsSubtitle } from './styles';
import { ProjectComp } from '../ProjectComp';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    projectName: 'Ignite Feed',
    projectImg: igniteFeedImg,
    gitRepository: 'https://github.com/ageumenezesDev19/Ignite-feed.git',
    demoLink: 'https://ignite-feed-livid.vercel.app'
  },
  {
    id: 2,
    projectName: 'To-Do',
    projectImg: toDoImg,
    gitRepository: 'https://github.com/ageumenezesDev19/project-my-tasks-to-do.git',
    demoLink: 'https://endearing-hamster-35a11e.netlify.app'
  },
  {
    id: 3,
    projectName: 'Solar System',
    projectImg: solarSystemImg,
    gitRepository: 'https://github.com/ageumenezesDev19/project-solar-system',
    demoLink: 'https://project-solar-system-7s8g9uo88-ageumenezesdev19.vercel.app'
  },
  {
    id: 4,
    projectName: 'Pixels Art',
    projectImg: pixelsArtImg,
    gitRepository: 'https://github.com/ageumenezesDev19/project-trybewarts-2/tree/main',
    demoLink: 'https://project-pixels-art-alpha.vercel.app'
  },
  {
    id: 5,
    projectName: 'My Portfolio',
    projectImg: myPortfolio,
    gitRepository: 'https://github.com/ageumenezesDev19/ageumenezesDev19P2.github.io-.git',
  },
  {
    id: 6,
    projectName: 'Trybewarts 2',
    projectImg: trybeWarts2Img,
    gitRepository: 'https://github.com/ageumenezesDev19/project-trybewarts-2/tree/main',
    demoLink: 'https://project-trybewarts-2.vercel.app'
  },
  {
    id: 7,
    projectName: 'Playground Functions',
    projectImg: standardImg,
    gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-04_Intruducão-a-javaScript-e-lógica-de-programacão/dia-5_projeto_playground-functions',
  },
  {
    id: 8,
    projectName: 'Unit Tests',
    projectImg: standardImg,
    gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-07-introducao-a-javascript-es6-e-testes-unitarios/dia-4_projeto_javaScript-testes-unitários',
  },
  {
    id: 9,
    projectName: 'Zoo Functions',
    projectImg: standardImg,
    gitRepository: 'https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-08-higher-order-functions-do-javascript-es6/dia-6_projeto_zoo-functions',
  }
]

interface DataProps {
  numberOfProjects: (projects: Project[]) => void;
}

interface Project {
  id: number;
  projectName: string;
  projectImg: string;
  gitRepository: string;
  demoLink?: string;
}

export function MyProjects({numberOfProjects}: DataProps) {

  useEffect(() => {
    numberOfProjects(projects)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <>
      <ProjectsSubtitle>
        <div>
          <h2>My Projects</h2>
        </div>
      </ProjectsSubtitle>
      <ProjectsSection>
      {projects.map((project) => (
          <ProjectComp
            key={project.id}
            projectName={project.projectName}
            projectImg={project.projectImg}
            gitRepository={project.gitRepository}
            demoLink={project.demoLink}
          />
        ))}
      </ProjectsSection>
    </>
  )
}
