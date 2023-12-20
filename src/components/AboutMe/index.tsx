import { AboutMeSection } from "./styles";

export function AboutMe() {
  return (
    <AboutMeSection>
      <h2>About me</h2>
      <p>
        Greetings! I'm a Front-end Web Developer who embarked on my coding journey at{' '}
        <a
          href="https://www.betrybe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="trybeLink"
        >
          <b>Trybe</b>
        </a>, a distinguished Computer Science school, dedicating 7 months to refining my skills.
        With the knowledge gained, I launched my career as a Software Engineer, crafting not only
        this portfolio but also various other projects. My learning journey extends to platforms
        such as{' '}
        <a
          href="https://www.rocketseat.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="rocketLink"
        >
          <b>Rocketseat</b>
        </a>,{' '}
        <a
          href="https://go.hotmart.com/O61634593X"
          target="_blank"
          rel="noopener noreferrer"
          className="catalineLink"
        >
          <b>Cataline</b>
        </a> and{' '}
        <a
          href="https://www.udemy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="udemyLink"
        >
          <b>Udemy</b>
        </a>.
      </p>
      <br />
      <p>
        Hailing from the state of Ceará, Brazil, I'm a 21-year-old tech enthusiast. When I'm not
        immersed in code, you'll find me captivated by physics, science fiction, animation, and
        adventure movies. I have a deep appreciation for nature and a love for international and
        electronic music.
      </p>
      <br />
      <p>
        I chose the path of a Software Engineer because it represents a fundamental pillar in the
        ever-evolving tech world that I hold dear and resonate with. Consequently, I am committed
        to advancing my hard skills, nurturing my soft skills, and undertaking projects to stay
        abreast of the dynamic job market.
      </p>
    </AboutMeSection>
  );
}
