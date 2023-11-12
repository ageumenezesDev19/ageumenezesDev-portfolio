import { HardSkillsStyle } from './styles';

export function MyHardSkills() {
  return(
    <HardSkillsStyle>
      <div>
        <h4>Web Developer</h4>
          <ul>
            <li><p className='devicon-html5-plain-wordmark colored'>HTML5 | Advanced</p></li>
            <li><p className='devicon-css3-plain-wordmark colored'>CSS3 | Intermediate</p></li>
            <li><p> JavaScript | Intermediate</p></li>
            <li><p>Basic</p></li>
            <li><p>Basic</p></li>
            <li><p> Intermediate</p></li>
            <li><p> VS Code | Intermediate</p></li>
            <li><p > Bash | Basic</p></li>
            <li><p > Jest | Basic</p></li>
          </ul>
            </div>
        <div>
          <h4>Creativity</h4>
          <ul>
            <li><p> Intermediate</p></li>
            <li><p> Basic</p></li>
            <li><p> Intermediate</p></li>
            <li><p> Intermediate</p></li>
          </ul>
        </div>
        <div>
          <h4>Others</h4>
          <ul>
            <li><i><p>MacOS</p></i></li>
            <li><p>🇺🇸 English: Advanced</p></li>
          </ul>
        </div>
    </HardSkillsStyle>
  )
}
