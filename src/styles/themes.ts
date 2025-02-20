export const lightTheme = {
  background: '#F0F0F0',
  primaryColor: '#003354', // var(--background-7) do modo claro
  textColor: '#333333',
  secondaryColor: '#6392E9',
  accentColor: 'rgb(0,174,255)',
  boxShadow: '0px 0px 25px rgb(58, 110, 221)',
  hardSkillsContainerBackground: '#FFFFFF', // permanece branco no modo claro
  softSkillsContainerBackground: 'rgb(187,38,100)', // tom original para soft skills
  softSkillsBoxShadow: '0px 0px 30px rgb(221,45,118)', // mesmo valor original
  // Novas propriedades para My Links
  linksBackground: '#FFFFFF',
  linksBorder: '7px solid rgb(255,0,76)',
  linksBoxShadow: '0px 0px 25px rgb(255,0,76)',
  experienceBackground: 'rgb(176,235,110)',
  experienceBoxShadow: '0px 0px 25px rgb(176,235,110)',
  experienceTextColor: 'black',
};

export const darkTheme = {
  background: '#1A1A1A',
  primaryColor: '#121212',
  textColor: '#EEEEEE',
  secondaryColor: '#284B63',
  accentColor: 'rgb(0,174,255)', // mesmo accentColor se desejar
  boxShadow: '0px 0px 25px rgb(58, 110, 221)',
  hardSkillsContainerBackground: '#121212',
  softSkillsContainerBackground: 'rgb(150,75,0)', // exemplo de laranja escuro
  softSkillsBoxShadow: '0px 0px 30px rgb(150,75,0)', // sombra adaptada para dark mode
  // Mantendo os valores originais para My Links, exceto o background:
  linksBackground: '#333333', // background escuro no dark mode
  linksBorder: '7px solid rgb(255,0,76)',
  linksBoxShadow: '0px 0px 25px rgb(255,0,76)',
  experienceBackground: '#2b2b2b',           // cor adequada para dark mode
  experienceBoxShadow: '0px 0px 25px rgba(0,0,0,0.8)',
  experienceTextColor: '#EEEEEE',
};