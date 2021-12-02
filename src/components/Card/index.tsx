import * as S from './styles'
import EthIcon from '../../../public/img/template/icon-ethereum.svg'
import ClockIcon from '../../../public/img/template/icon-clock.svg'

export type CardProps = {
  title: string
  description: string
  image: string
  price: number
  currency: string
  days_left: string
  authorName: string
  authorImage: string
}

const Card = ({
  title,
  description,
  image,
  price,
  currency,
  days_left,
  authorName,
  authorImage
}: CardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={image} alt="" />
    </S.ImageBox>
    <S.ContentBox>
      <S.InfoBox>
        <S.Title>{title}</S.Title>
        <S.CardDescription>{description}</S.CardDescription>
        <S.PriceInfos>
          <S.PriceBox>
            <S.IconWrapper src={EthIcon} alt="" />
            <S.Price>{price} </S.Price>
          </S.PriceBox>
          <S.DateInfo>
            <S.IconWrapper src={ClockIcon} alt="" />
            <S.DaysLeft>{days_left || 0} days left</S.DaysLeft>
          </S.DateInfo>
        </S.PriceInfos>
      </S.InfoBox>
      <S.FooterBox>
        <S.AuthorImage>
          <img src={authorImage} alt="" />
        </S.AuthorImage>
        <S.AuthorDescription>
          Created by <strong>{authorName}</strong>
        </S.AuthorDescription>
      </S.FooterBox>
    </S.ContentBox>
  </S.Wrapper>
)

export default Card
