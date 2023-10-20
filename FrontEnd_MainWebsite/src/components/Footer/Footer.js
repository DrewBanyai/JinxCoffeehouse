import React from 'react';
import { AiFillInstagram as Instagram } from 'react-icons/ai'
import { BiMap as GoogleMaps } from 'react-icons/bi';
import { AiFillRedditCircle as Reddit } from "react-icons/ai";

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Hours</LinkTitle>
          <LinkItem>Monday - Saturday<br />8:00am to 4:00pm</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contact Us</LinkTitle>
          <LinkItem href="mailto:JinxCoffeehouse@gmail.com">
            JinxCoffeehouse@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons href="https://www.instagram.com/jinxcoffeehouse/">
                <Instagram size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.google.com/maps/place/23+Griswold+St,+Binghamton,+NY+13904">
                <GoogleMaps size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://reddit.com/r/JinxCoffeehouse">
                <Reddit size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
