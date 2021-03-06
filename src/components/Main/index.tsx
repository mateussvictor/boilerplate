import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of atom and Advanced React written on the side"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing the screen with codes."
    />
  </S.Wrapper>
)

export default Main
