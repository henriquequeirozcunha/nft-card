import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.cardBg};
    height: 100%;
    width: 100%;
    padding: 2rem;
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.normal};
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex: 4;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }
  `}
`

export const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xxsmall} 0;
    flex: 1;
    overflow-wrap: break-word;
  `}
`

export const ContentBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 3;
    flex-direction: column;
    margin-top: ${theme.spacings.medium};
  `}
`

export const CardDescription = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`

export const FooterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid ${theme.colors.line};
  `}
`

export const AuthorImage = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    margin: ${theme.spacings.xxsmall} 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${theme.colors.line};
    }
  `}
`

export const AuthorDescription = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.small};

    strong {
      color: ${theme.colors.white};
    }
  `}
`

export const PriceInfos = styled.div`
  ${() => css`
    display: flex;
    margin-top: auto;
    justify-content: space-between;
    padding-bottom: 5px;
  `}
`

export const IconWrapper = styled.img`
  ${() => css``}
`

export const DateInfo = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`

export const PriceBox = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    margin-left: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
  `}
`

export const DaysLeft = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
  `}
`
