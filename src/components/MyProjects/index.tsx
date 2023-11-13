import defaultProjectImg from '../../assets/projects-images/project_code-only.jpg';
import pixelsArtImg from '../../assets/projects-images/porject-3_pixels-art.png';
import toDoImg from '../../assets/projects-images/project-4_to-do-list.png';
import toDo2Img from '../../assets/projects-images/my-tasks-to-do-2.png';
import TrybewartsImg from '../../assets/projects-images/porject-5_trybewarts.png';
import solarSystemImg from '../../assets/projects-images/project-solar-system.png';
import { ProjectsSection } from './styles';
import { ProjectsSubtitle } from './stylesT';

export function MyProjects() {
  return(
    <>
      <ProjectsSubtitle>
        <div>
          <h2>My Projects</h2>
        </div>
      </ProjectsSubtitle>
      <ProjectsSection>
        <div>
          <h3>Playground Functions</h3>
            <img
              src={defaultProjectImg}
              alt="Imagem do projeto 2: Playground Functions"
            />
            <a
              href="https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-04_Intruducão-a-javaScript-e-lógica-de-programacão/dia-5_projeto_playground-functions"
              target="_blank" rel="noopener noreferrer">
                <button name="button">GitHub</button>
            </a>
        </div>
        <div>
          <h3>Pixels Art</h3>
          <img
            src={pixelsArtImg}
            alt="Imagem do projeto 3: Pixels Art"
          />
          <section>
            <a
            href="https://github.com/ageumenezesDev19/project_pixels-art/tree/main"
            target="_blank" rel="noopener noreferrer"
            >
              <button
                name="button">
                  GitHub
              </button>
            </a>
            <a
              href="https://project-pixels-art-alpha.vercel.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
              </a>
          </section>
        </div>
        <div>
          <h3>To-Do List</h3>
          <img
            src={toDoImg}
            alt="Imagem do projeto 4: To-Do List"
          />
          <section>
            <a
              href="https://github.com/ageumenezesDev19/project-to-do-list/tree/main"
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub
                </button>
            </a>
            <a
              href="https://project-to-do-list-8mkkaj1v2-ageumenezesdev19.vercel.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
            </a>
          </section>
        </div>
        <div>
          <h3>Trybewarts 1</h3>
          <img
            src={TrybewartsImg}
            alt="Imagem do projeto 5: Trybewarts 1"
          />
          <section>
            <a
              href="https://github.com/ageumenezesDev19/project-trybewarts-1"
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub
                </button>
            </a>
            <a
              href="https://project-trybewarts-1-l0h6ftazy-ageumenezesdev19.vercel.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
            </a>
          </section>
        </div>
        <div>
          <h3>Trybewarts 2</h3>
          <img
            src={TrybewartsImg}
            alt="Imagem do projeto 5: Trybewarts 2"
          />
          <section>
            <a
              href="https://github.com/ageumenezesDev19/project-trybewarts-2/tree/main"
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub
                </button>
            </a>
            <a
              href="https://project-trybewarts-2.vercel.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
            </a>
          </section>
        </div>
        <div>
          <h3>Unit Tests</h3>
          <img
            src={defaultProjectImg}
            alt="Imagem do projeto 6: Unit Tests"
          />
          <a
            href="https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-07-introducao-a-javascript-es6-e-testes-unitarios/dia-4_projeto_javaScript-testes-unitários"
            target="_blank" rel="noopener noreferrer">
              <button name="button">
                GitHub
              </button>
          </a>
        </div>
        <div>
          <h3>Zoo Functions</h3>
          <img
            src={defaultProjectImg}
            alt="Imagem do projeto 7: Zoo Functions"
          />
          <a
            href="https://github.com/ageumenezesDev19/trybe-course_exercises/tree/main/módulo-1_fundamentos-do-desenvolvimento-web/bloco-08-higher-order-functions-do-javascript-es6/dia-6_projeto_zoo-functions"
            target="_blank" rel="noopener noreferrer">
              <button name="button">
                GitHub
              </button>
          </a>
        </div>
        <div>
          <h3>Solar System</h3>
          <img
            src={solarSystemImg}
            alt="Imagem do projeto 7: Zoo Functions"
          />
          <section>
            <a
              href="https://github.com/ageumenezesDev19/project-solar-system"
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub
                </button>
            </a>
            <a
              href="https://project-solar-system-7s8g9uo88-ageumenezesdev19.vercel.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
            </a>
          </section>
        </div>
        <div>
          <h3>To-Do 2</h3>
          <img
            src={toDo2Img}
            alt="Imagem do projeto 8: to-do-2.0"
          />
          <section>
            <a
              href="https://github.com/ageumenezesDev19/project-my-tasks-to-do.git"
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub</button>
            </a>
            <a
              href="https://endearing-hamster-35a11e.netlify.app"
              target="_blank" rel="noopener noreferrer">
                <button name="button2">
                  View Demo
                </button>
            </a>
          </section>
        </div>
      </ProjectsSection>
    </>
  )
}
