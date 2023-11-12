import { LinkStyle } from './styles';

interface Links {
  link: string;
}

export function Links({link}:Links) {
  return(
    <LinkStyle id={link}></LinkStyle>
  )
}