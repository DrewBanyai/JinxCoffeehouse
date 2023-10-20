import styled from 'styled-components';

export const Img = styled.img`
  min-width: ${(props) => props.theme.image.menuImageSizing};
  width: ${(props) => props.theme.image.menuImageSizing};
  min-height: ${(props) => props.theme.image.menuImageSizing};
  height: ${(props) => props.theme.image.menuImageSizing};
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  padding: 1rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const MenuItemCard = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 2px 2px 6px ${(props) => props.theme.colors.palette5Half};
  display: inline-flex;
  text-align: center;
  width: 100%;
  height: ${(props) => props.theme.image.menuImageSizing};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const MenuItemCardRight = styled.div`
  overflow: hidden;
  width: 100%
`;

export const TitleContent = styled.div`
  overflow: hidden;
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 1vh 0px 0.5rem 0px
`;


export const HeaderThree = styled.h3`
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '6vw' : '4vw'};
  @media (min-width: 768px) {
    font-size: ${(props) => props.title ? '1.6vw' : '1.2vw'};
  }
`;

export const Hr = styled.hr`
  overflow: hidden;
  width: 50px;
  height: 3px;
  margin: 6px auto 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  display: contents;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`