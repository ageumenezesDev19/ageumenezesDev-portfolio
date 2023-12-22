import { HardSkillsStyle } from './styles';

export function MyHardSkills() {
  return(
    <HardSkillsStyle>
      <div>
        <div>
          <h2>My Hard Skills</h2>
        </div>
        <h4>Web Developer</h4>
        <ul>
          <li><p className='devicon-html5-plain-wordmark colored'>HTML5 | Advanced</p></li>
          <li><p className='devicon-css3-plain-wordmark colored'>CSS3 | Advanced</p></li>
          <li><p className='devicon-javascript-plain colored'> JavaScript | Advanced</p></li>
          <li><p className='devicon-react-original-wordmark colored'>Advanced</p></li>
          <li><p className='devicon-nextjs-plain-wordmark colored'> Intermediate</p></li>
          <li><p className='devicon-git-plain-wordmark colored'>Intermediate</p></li>
          <li><p className='devicon-github-original-wordmark colored'> Intermediate</p></li>
          <li><p className='devicon-vscode-plain colored'> VS Code | Intermediate</p></li>
          <li><p className='devicon-bash-plain colored'> Bash | Intermediate</p></li>
          <li><p className='devicon-jest-plain colored'> Jest | Basic</p></li>
        </ul>
      </div>
      <div>
        <h4>Creativity</h4>
        <ul>
          <li><p className='devicon-premierepro-plain colored'> Intermediate</p></li>
          <li><p className='devicon-aftereffects-plain colored'> Basic</p></li>
          <li><p className='devicon-photoshop-plain colored'> Intermediate</p></li>
          <li><p className='devicon-illustrator-plain colored'> Intermediate</p></li>
        </ul>
      </div>
      <div>
        <h4>Others</h4>
        <ul>
          <li><i><p className='devicon-apple-original colored'>MacOS</p></i></li>
          <li><p style={{color: 'black'}}>🇺🇸 English: Advanced</p></li>
        </ul>
      </div>
    </HardSkillsStyle>
  )
}
