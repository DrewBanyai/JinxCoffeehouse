import Link from 'next/link';
import React from 'react';
import { SiCoffeescript as TitleLogo } from "react-icons/si";
import { AiFillInstagram as Instagram } from 'react-icons/ai'
import { BiMap as GoogleMaps } from 'react-icons/bi';
import { AiFillRedditCircle as Reddit } from "react-icons/ai";

import { Container, Div1, Div2, Div3, NavLink, NavLinkLi, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1 style={{marginBottom:"10px"}}>
      <Link href="./">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <TitleLogo size="3rem" /> <span style={{marginLeft:"10px"}}>Jinx Coffeehouse</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{marginTop:"4px"}}>
      <NavLinkLi>
        <Link href="#menu">
          <NavLink>Menu</NavLink>
        </Link>
      </NavLinkLi>
      {/*
      <NavLinkLi>
        <Link href="#space">
          <NavLink>The Space</NavLink>
        </Link>
      </NavLinkLi>
      */}        
      <NavLinkLi>
        <Link href="#about">
          <NavLink>About Us</NavLink>
        </Link>
      </NavLinkLi>        
    </Div2>
      <Div3>
        <SocialIcons href="https://www.instagram.com/jinxcoffeehouse/">
          <Instagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.google.com/maps/place/23+Griswold+St,+Binghamton,+NY+13904">
          <GoogleMaps size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://reddit.com/r/JinxCoffeehouse">
          <Reddit size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
