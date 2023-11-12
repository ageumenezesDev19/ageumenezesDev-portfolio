import { MainImgStyles } from './styles';
import MyMainImg from '../../assets/profile_pictures/Foto do Perfil 4.3.jpg'

export function MainImg() {
  return(
    <MainImgStyles>
      <img src={MyMainImg} alt="Minha imagem principal" />
    </MainImgStyles>
  )
}
