import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Component'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo com os textos React Avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
)

export default Main
