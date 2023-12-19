interface ProjectProps {
  projectName: string;
  projectImg: string;
  gitRepository: string;
  demoLink?: string;
}

export function ProjectComp({projectName, projectImg, gitRepository, demoLink}: ProjectProps) {
  return(
    <>
      <div>
          <h3>{projectName}</h3>
          <img
            src={projectImg}
            alt={`Screenshot of ${projectName}`}
          />
          <section>
            <a
              href={gitRepository}
              target="_blank" rel="noopener noreferrer">
                <button name="button">
                  GitHub</button>
            </a>
            {
            demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button name="button2">View Demo</button>
              </a>
            )}
          </section>
        </div>
    </>
  );
}
